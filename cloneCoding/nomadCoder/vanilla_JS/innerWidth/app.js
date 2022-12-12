const body = document.querySelector("body");
const colors = ["cornflowerblue", "green", "yellow", "lightgray"];

body.style.backgroundColor = colors[0];

function changeScreen() {
  const width = window.innerWidth;
  if (width <= 400) {
    body.style.backgroundColor = colors[1];
  } else if (width > 400 && width <= 800) {
    body.style.backgroundColor = colors[2];
  } else {
    body.style.backgroundColor = colors[3];
  }
}
window.addEventListener("resize", changeScreen);
