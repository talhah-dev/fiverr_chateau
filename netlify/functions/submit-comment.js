exports.handler = async (event) => {
    try {
        if (event.httpMethod !== "POST") {
            return { statusCode: 405, body: "Method Not Allowed" };
        }

        const params = new URLSearchParams(event.body || "");
        const question = (params.get("question") || "").trim();
        const name = (params.get("name") || "").trim();
        const website = (params.get("website") || "").trim();

        if (website) return { statusCode: 200, body: "OK" };

        if (!question || question.length > 5000) {
            return { statusCode: 400, body: "Question is required (max 5000 chars)." };
        }

        const entry = {
            id: cryptoRandomId(),
            name: name ? name.slice(0, 80) : "Anonymous",
            question,
            createdAt: new Date().toISOString(),
            response: ""
        };

        const token = process.env.GITHUB_TOKEN;
        const repo = process.env.GITHUB_REPO;
        const branch = process.env.GITHUB_BRANCH || "main";
        const questionsDir = process.env.QUESTIONS_DIR || "docs/questions";
        const filePath = `${questionsDir}/questions.json`;

        if (!token || !repo) {
            return { statusCode: 500, body: "Missing GitHub environment variables." };
        }

        const ghHeaders = {
            Authorization: `Bearer ${token}`,
            "User-Agent": "netlify-questions",
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

        existing.push(entry);

        const updatedJson = JSON.stringify(existing, null, 2);
        const encoded = Buffer.from(updatedJson, "utf8").toString("base64");

        const putUrl = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}`;
        const putBody = {
            message: `Add question`,
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
            headers: { Location: `/thank-you.html` },
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
