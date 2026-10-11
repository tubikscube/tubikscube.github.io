/* Applies the saved light/dark choice before the page paints. */
document.documentElement.classList.add("js");
try {
  var t = localStorage.getItem("theme");
  if (t) document.documentElement.setAttribute("data-theme", t);
} catch (e) { /* storage unavailable */ }
