const h1 = document.querySelector("h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // const clickedClassName = "clicked";
  // if (h1.classList.contains(clickedClassName)) {
  //   h1.classList.remove(clickedClassName);
  // } else {
  //   h1.classList.add(clickedClassName);
  // }
}
h1.addEventListener("click", handleTitleClick);
