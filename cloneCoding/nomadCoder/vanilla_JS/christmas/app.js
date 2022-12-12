const time = document.querySelector(".time");

function christmasDay() {
  const endDateTime = new Date("Dec 25 2022 00:00:00 GMT+0900").getTime();
  const todayTime = new Date().getTime();
  const countTime = endDateTime - todayTime;
  //   const days = Math.floor(countTime / (1000 * 60 * 60 * 24) + 1);
  const days = Math.ceil(countTime / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((countTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((countTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const seconds = String(Math.floor((countTime % (1000 * 60)) / 1000)).padStart(2, "0");
  time.innerText = `${days} day ${hours}:${minutes}:${seconds}`;
}
christmasDay();
setInterval(christmasDay, 1000);
