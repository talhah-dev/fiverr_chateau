const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" data-aos="fade-down"
        class="fixed transition-all duration-500 top-0 left-0 w-full z-50  backdrop-blur border-b border-emerald-500/20">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center md:h-24 justify-between">

            <a href="/index.html" class="flex items-center gap-3">
                <span class="font-aghram text-sm md:text-xl tracking-wide text-[var(--cw-green)]">
                  Château Weatherford
                </span>
            </a>

            <nav class="hidden lg:flex items-center gap-8  font-catamaran text-gray-200">
                <a href="/index.html" class="hover:text-[var(--cw-green)] transition">Home</a>
                <a href="/about.html" class="hover:text-[var(--cw-green)] transition">About</a>
                <a href="/parties.html" class="hover:text-[var(--cw-green)] transition">Parties</a>
                <a href="/thoughts.html" class="hover:text-[var(--cw-green)] transition">Thoughts</a>
                <a href="/questions.html" class="hover:text-[var(--cw-green)] transition">Questions</a>
                <a href="/gallery.html" class="hover:text-[var(--cw-green)] transition">Gallery</a>
                <a href="/tags.html" class="hover:text-[var(--cw-green)] transition">Tags</a>
            </nav>

            <!-- <div class="">
                <a href="/questions.html"
                    class="px-5 py-3 rounded-xl lg:block hidden border border-emerald-500/40 text-[var(--cw-green)] hover:bg-emerald-500 hover:text-black transition  font-aghram">
                    Ask
                </a>
            </div> -->

            <button id="menuBtn" class="lg:hidden text-[var(--cw-green)] text-xl">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
    <div class="h-14 md:h-20 "></div>

    <div id="mobileMenu"
        class="fixed top-0 right-0 h-full w-0 bg-black overflow-hidden transition-all duration-300 ease-in-out z-50 border-l border-emerald-500/20">

        <div class="flex items-center justify-between px-6 h-16 border-b border-emerald-500/20">
            <a href="/index.html" class="flex items-center gap-3">
                <span class="font-aghram text-sm tracking-wide text-[var(--cw-green)]">
                  Château Weatherford
                </span>
            </a>
            <button id="closeBtn" class="text-xl text-[var(--cw-green)]">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <nav class="flex flex-col gap-6 px-6 py-10 text-gray-200 font-catamaran">
            <a href="/index.html" class="hover:text-[var(--cw-green)] transition">Home</a>
            <a href="/about.html" class="hover:text-[var(--cw-green)] transition">About</a>
            <a href="/parties.html" class="hover:text-[var(--cw-green)] transition">Parties</a>
            <a href="/thoughts.html" class="hover:text-[var(--cw-green)] transition">Thoughts</a>
            <a href="/questions.html" class="hover:text-[var(--cw-green)] transition">Questions</a>
            <a href="/gallery.html" class="hover:text-[var(--cw-green)] transition">Gallery</a>
            <a href="/tags.html" class="hover:text-[var(--cw-green)] transition">Tags</a>

            <!--  <a href="/questions.html" class="mt-4 inline-flex justify-center items-center gap-3 px-6 py-4 rounded-xl border border-emerald-500/40 text-[var(--cw-green)] hover:bg-emerald-500 hover:text-black text-xs transition font-aghram">
            Ask a Question
            <i class="fa-solid fa-question"></i>
            </a> -->
        </nav>
    </div>
`;

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.width = "0";
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");

  function updateHeaderBg() {
    if (window.scrollY > 100) {
      header.classList.remove("bg-transparent");
      header.classList.add("border-emerald-500/20");
    } else {
      header.classList.add("border-emerald-500/20");
    }
  }

  updateHeaderBg();

  window.addEventListener("scroll", updateHeaderBg, { passive: true });
});
