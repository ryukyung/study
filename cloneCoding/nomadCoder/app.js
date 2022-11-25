const body = document.querySelector("body");
function changeScreen() {
  const width = window.innerWidth;
  const classNames = body.classList;
  // console.log(body.classList);
  if (width <= 400) {
    if (body.classList.contains(classNames)) {
      body.classList.remove(classNames);
    }
    body.classList.add("lightgray");
  } else if (width > 400 && width <= 800) {
    if (body.classList.contains(classNames)) {
      body.classList.remove(classNames);
    }
    body.classList.add("green");
  } else {
    if (body.classList.contains(classNames)) {
      body.classList.remove(classNames);
    }
    body.classList.add("yellow");
  }
}
window.addEventListener("resize", changeScreen);
