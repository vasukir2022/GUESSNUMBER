let randomNum;
let score = 20;
let guessNumber = document.querySelector(".number");
let chkBtn = document.getElementById("checkBtn");
let inputField = document.querySelector(".guess");
let messageResult = document.querySelector(".message");
let scoreData = document.querySelector(".score");

generateRndmNum();
function generateRndmNum() {
  randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(randomNum);
  guessNumber.textContent = randomNum;
}
let checkGuessNumber = function () {
  let inputValue = inputField.value;
  if (Number(inputValue) === randomNum) {
    messageResult.textContent = "Correct answer👍";
    document.body.style.backgroundColor = "lightgreen";
    inputField.value = "";
    generateRndmNum();
  } else if (inputValue < randomNum) {
    messageResult.textContent = "Your guess is low👎";
    score--;
    scoreData.textContent = score;
    document.body.style.backgroundColor = "rgb(253, 220, 112)";
  } else if (inputValue > randomNum) {
    messageResult.textContent = "Your guess is high👎";
    score--;
    scoreData.textContent = score;
    document.body.style.backgroundColor = "red";
  }
};
chkBtn.addEventListener("click", checkGuessNumber);
