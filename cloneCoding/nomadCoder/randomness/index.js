const clickBtn = document.querySelector("button");
const colors = [
  "#042940",
  "#005C53",
  "#005C53",
  "#DBF227",
  "#D6D58E",
  "#C7FFED",
  "#D8FFDB",
  "#008F8C",
  "#015958",
  "#023535",
  "#2E5902",
  "#65A603",
  "#C5D932",
  "#EFF285",
  "#F0F2B3",
];
function changeBg() {
  const chooseColor1 = colors[Math.floor(Math.random() * colors.length)];
  const chooseColor2 = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(to right, ${chooseColor1}, ${chooseColor2})`;
}
clickBtn.addEventListener("click", changeBg);
