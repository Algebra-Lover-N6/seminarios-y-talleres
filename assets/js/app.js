(() => {
  const root = document.documentElement;
  const button = document.getElementById("languageSwitch");
  const stored = localStorage.getItem("math-site-language");

  if (stored === "en") {
    root.dataset.language = "en";
    root.lang = "en";
  }

  button?.addEventListener("click", () => {
    const english = root.dataset.language === "en";
    if (english) {
      delete root.dataset.language;
      root.lang = "es";
      localStorage.setItem("math-site-language", "es");
    } else {
      root.dataset.language = "en";
      root.lang = "en";
      localStorage.setItem("math-site-language", "en");
    }
  });
})();