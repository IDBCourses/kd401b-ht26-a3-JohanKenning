const link = document.querySelector("#pallete");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
});
