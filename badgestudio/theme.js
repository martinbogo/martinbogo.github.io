// Applies the saved theme before the page draws, so a light choice never
// flashes dark first. A file of its own because the CSP allows no inline
// script. Kept in this browser only (localStorage); nothing is sent anywhere.
(function () {
  try {
    var t = localStorage.getItem("badge-studio-theme");
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  } catch (e) { /* storage blocked: Auto */ }
})();
