const lenis = new Lenis({
  autoRaf: true,
});


// AOS.init({
//   once: true,
//   duration: 1000
// });


// components

// LOADER
const loader = document.getElementById("loader");

loader.innerHTML = `
  <div id="siteLoader" class="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
  <div class="text-center px-6">
    <div class="flex items-center justify-center gap-3 mb-6">
      <span class="font-aghram text-lg md:text-3xl tracking-wide text-[var(--cw-green)]">
        Château Weatherford
      </span>
    </div>

    <div class="flex items-center justify-center gap-2 mb-4">
      <span class="h-2 w-2 rounded-full bg-emerald-300 animate-bounce [animation-delay:-0.2s]"></span>
      <span class="h-2 w-2 rounded-full bg-emerald-300 animate-bounce [animation-delay:-0.1s]"></span>
      <span class="h-2 w-2 rounded-full bg-emerald-300 animate-bounce"></span>
    </div>

    <p class="font-catamaran text-sm text-gray-400">
      Loading…
    </p>
  </div>
</div>

`;

(function () {
  const loader = document.getElementById("siteLoader");
  if (!loader) return;

  function hideLoader() {
    loader.classList.add("opacity-0");
    loader.classList.add("pointer-events-none");
    loader.style.transition = "opacity 400ms ease";
    setTimeout(() => loader.remove(), 450);
  }

  window.addEventListener("load", hideLoader);

  setTimeout(() => {
    if (document.readyState === "complete") hideLoader();
  }, 50);
})();
