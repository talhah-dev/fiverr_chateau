exports.handler = async (event) => {
    try {
        if (event.httpMethod !== "POST") {
            return { statusCode: 405, body: "Method Not Allowed" };
        }

        const params = new URLSearchParams(event.body || "");
        const name = (params.get("name") || "").trim();
        const email = (params.get("email") || "").trim();
        const comment = (params.get("comment") || "").trim();
        const slug = (params.get("slug") || "").trim();
        const website = (params.get("website") || "").trim();

        if (website) {
            return { statusCode: 200, body: "OK" };
        }

        if (!slug || slug.length > 120) {
            return { statusCode: 400, body: "Missing or invalid slug." };
        }

        if (!name || name.length > 80) {
            return { statusCode: 400, body: "Name is required (max 80 chars)." };
        }

        if (!comment || comment.length > 3000) {
            return { statusCode: 400, body: "Comment is required (max 3000 chars)." };
        }

        const safeEmail = email.length > 120 ? "" : email;

        const newComment = {
            id: cryptoRandomId(),
            name,
            email: safeEmail,
            comment,
            createdAt: new Date().toISOString()
        };

        const token = process.env.GITHUB_TOKEN;
        const repo = process.env.GITHUB_REPO;
        const branch = process.env.GITHUB_BRANCH || "main";
        const commentsDir = process.env.COMMENTS_DIR || "src/_data/comments";

        if (!token || !repo) {
            return { statusCode: 500, body: "Missing GitHub environment variables." };
        }

        const filePath = `${commentsDir}/${slug}.json`;

        const ghHeaders = {
            Authorization: `Bearer ${token}`,
            "User-Agent": "netlify-comments",
            Accept: "application/vnd.github+json"
        };

        const getUrl = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(branch)}`;

        let existing = [];
        let sha = null;

        const getRes = await fetch(getUrl, { headers: ghHeaders });

        if (getRes.status === 200) {
            const file = await getRes.json();
            sha = file.sha;
            const content = Buffer.from(file.content, "base64").toString("utf8");
            try {
                existing = JSON.parse(content);
                if (!Array.isArray(existing)) existing = [];
            } catch {
                existing = [];
            }
        } else if (getRes.status !== 404) {
            const errText = await getRes.text();
            return { statusCode: 500, body: `GitHub read error: ${errText}` };
        }

        existing.push(newComment);

        const updatedJson = JSON.stringify(existing, null, 2);
        const encoded = Buffer.from(updatedJson, "utf8").toString("base64");

        const putUrl = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}`;
        const putBody = {
            message: `Add comment to ${slug}`,
            content: encoded,
            branch
        };

        if (sha) putBody.sha = sha;

        const putRes = await fetch(putUrl, {
            method: "PUT",
            headers: { ...ghHeaders, "Content-Type": "application/json" },
            body: JSON.stringify(putBody)
        });

        if (putRes.status < 200 || putRes.status >= 300) {
            const errText = await putRes.text();
            return { statusCode: 500, body: `GitHub write error: ${errText}` };
        }

        return {
            statusCode: 303,
            headers: {
                Location: `/thank-you.html`
            },
            body: ""
        };
    } catch (e) {
        return { statusCode: 500, body: `Server error: ${String(e)}` };
    }
};

function cryptoRandomId() {
    const bytes = new Uint8Array(12);
    for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}
