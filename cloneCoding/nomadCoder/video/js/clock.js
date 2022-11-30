const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 즉시호출(00:00:00 안 보려고) 후 setInterval로 getClock 실행
getClock();
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);
// "1".padStart(2, "0") // 2자리 수가 아니면 앞에 "0"을 추가해서 붙여준다
// "1".padEnd(2, "0"); // 위와 동일
