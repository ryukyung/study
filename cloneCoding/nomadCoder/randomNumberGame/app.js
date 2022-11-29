const rangeNumber = document.querySelector(".range");
const guessNumber = document.querySelector(".guess");
const resultButton = document.querySelector("button");
const resultText = document.querySelector(".result-text");

// 게임 범위 만들기 -> 0부터 입력받은 거까지가 범위야
function makeRangeNumber() {
  const RANGE = rangeNumber.value;
  guessNumber.setAttribute("max", RANGE);
}

// 버튼 누르기
function handleSubmitBtn(event) {
  event.preventDefault();
  const randomNumber = Math.ceil(Math.random() * rangeNumber.value);
  console.log(randomNumber);
  result(guessNumber.value, randomNumber);
}

// 랜덤 숫자 꺼내기
function result(userInput, machineInput) {
  console.log(userInput, machineInput);
  resultText.innerText =
    parseInt(userInput, 10) === machineInput
      ? `You chose: ${userInput}. the machine chose: ${machineInput}.\nYou Won!`
      : `You chose: ${userInput}. the machine chose: ${machineInput}.\nYou lost!`;
  //   if (parseInt(userInput, 10) === machineInput) {
  //     resultText.innerText = `You chose: ${userInput}. the machine chose: ${machineInput}.\nYou Won!`;
  //   } else {
  //     resultText.innerText = `You chose: ${userInput}. the machine chose: ${machineInput}.\nYou lost!`;
  //   }
}

rangeNumber.addEventListener("input", makeRangeNumber);
resultButton.addEventListener("click", handleSubmitBtn);
