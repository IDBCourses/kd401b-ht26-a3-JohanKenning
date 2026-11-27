const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const goingLight = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", goingLight ? "Standard" : "dark.css");
  button.textContent = goingLight ? "Dark mode" : "Light mode";
});

const reading = document.querySelector("#reading-styles");
const readingButton = document.querySelector("#reading");

readingButton.addEventListener("click", function () {
  const goingOn = reading.getAttribute("media") === "not all";
  reading.setAttribute("media", goingOn ? "all" : "not all");
  readingButton.textContent = goingOn ? "Standard mode" : "Reading mode";
});
