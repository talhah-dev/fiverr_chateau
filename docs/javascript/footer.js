const footer = document.getElementById("footer");

footer.innerHTML = `
  <footer class=" border-t border-emerald-500/20">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

        <div class="lg:col-span-2">
          <a href="/index.html" class="inline-flex items-center">
            <span class="font-aghram text-sm md:text-xl leading-[2] tracking-wide text-[var(--cw-green)]">
              Château Weatherford
            </span>
          </a>

          <p class="mt-4  leading-relaxed text-gray-300 font-catamaran">
           
          </p>

          <!--  <div class="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-[var(--cw-green)] transition hover:bg-emerald-500 hover:text-black">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="X"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-[var(--cw-green)] transition hover:bg-emerald-500 hover:text-black">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="Email"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-[var(--cw-green)] transition hover:bg-emerald-500 hover:text-black">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div> -->
        </div>
        
        <div>
          <p class=" font-bold capitalize text-white font-catamaran">Navigation</p>
          <ul class="mt-5 space-y-4  font-catamaran">
            <li><a href="/index.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">Home</a></li>
            <li><a href="/about.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">About</a></li>
            <li><a href="/questions.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">Questions</a></li>
            <li><a href="/tags.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">Tags</a></li>
          </ul>
        </div>

        <div>
          <p class=" font-bold capitalize text-white font-catamaran">Collections</p>
          <ul class="mt-5 space-y-5  font-catamaran">
            <li>
              <a href="/parties.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">
                <i class="fa-solid fa-champagne-glasses mr-2 text-[var(--cw-green)]/90"></i>Parties
              </a>
            </li>
            <li>
              <a href="/thoughts.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">
                <i class="fa-solid fa-feather-pointed mr-2 text-[var(--cw-green)]/90"></i>Thoughts
              </a>
            </li>
            <li>
              <a href="/gallery.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">
                <i class="fa-regular fa-images mr-2 text-[var(--cw-green)]/90"></i>Gallery
              </a>
            </li>
          </ul>
        </div>

        <!--  <div id="contact">
          <p class=" font-bold capitalize text-white font-catamaran">Contact</p>

          <div class="mt-5 space-y-4  text-gray-300 font-catamaran">
            <p class="flex items-start gap-3">
              <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-[var(--cw-green)]">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <span>
                hello@example.com
                <span class="block text-xs text-gray-400">Replies when I can</span>
              </span>
            </p>

            <p class="flex items-start gap-3">
              <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-[var(--cw-green)]">
                <i class="fa-solid fa-circle-question"></i>
              </span>
              <span>
                Prefer a question?
                <a href="/questions.html" class="block text-xs text-[var(--cw-green)] hover:text-emerald-200 transition">
                  Submit one here
                </a>
              </span>
            </p>
          </div>
        </div> -->

      </div>

      <div class="border-t border-emerald-500/20 py-7">
        <div class="flex gap-2 text-center items-center justify-center">
          <p class="text-xs text-gray-400 text-center font-catamaran">
            © <span id="year"></span> Château Weatherford. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
`;

document.getElementById("year").textContent = new Date().getFullYear();
