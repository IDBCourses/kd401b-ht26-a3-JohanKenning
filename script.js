const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const goingLight = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", goingLight ? "light.css" : "dark.css");
  button.textContent = goingLight ? "Dark mode" : "Light mode";
});
