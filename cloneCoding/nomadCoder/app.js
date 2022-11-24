const title = document.querySelector("div.hello:first-child h1");
const color = ["red", "green", "navy", "purple"];
function handleTitleClick() {
  title.innerText = "That was a right click";
  title.style.color = color[0];
}
function handleMouseEnter() {
  title.innerText = "The mouse is here! ";
  title.style.color = color[1];
}
function handleMouseLeave() {
  title.innerText = "The mouse is gone!";
  title.style.color = color[2];
}

function handWindowResize() {
  title.innerText = "You just resized!";
  title.style.color = color[3];
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handWindowResize);
