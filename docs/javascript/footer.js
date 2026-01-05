const footer = document.getElementById("footer");

footer.innerHTML = `
  <footer class="border-t border-emerald-500/20">
    <div class="mx-auto max-w-5xl px-6">
      
      <!-- Main footer content -->
      <div class="grid gap-10 py-14 sm:grid-cols-2 place-items-center text-center">

        <!-- Navigation -->
        <div>
          <p class="font-bold capitalize text-white font-catamaran mb-5">
            Navigation
          </p>
          <ul class="space-y-4 font-catamaran">
            <li><a href="/index.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">Home</a></li>
            <li><a href="/about.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">About</a></li>
            <li><a href="/questions.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">Questions</a></li>
            <li><a href="/tags.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">Tags</a></li>
          </ul>
        </div>

        <!-- Collections -->
        <div>
          <p class="font-bold capitalize text-white font-catamaran mb-5">
            Collections
          </p>
          <ul class="space-y-4 font-catamaran">
            <li>
              <a href="/parties.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">
                <i class="fa-solid fa-champagne-glasses mr-2 text-[var(--cw-green)]/90"></i>
                Parties
              </a>
            </li>
            <li>
              <a href="/thoughts.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">
                <i class="fa-solid fa-feather-pointed mr-2 text-[var(--cw-green)]/90"></i>
                Thoughts
              </a>
            </li>
            <li>
              <a href="/gallery.html" class="text-gray-300 transition hover:text-[var(--cw-green)]">
                <i class="fa-regular fa-images mr-2 text-[var(--cw-green)]/90"></i>
                Gallery
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-emerald-500/20 py-7">
        <p class="text-xs text-gray-400 text-center font-catamaran">
          © <span id="year"></span> Château Weatherford. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
`;

document.getElementById("year").textContent = new Date().getFullYear();
