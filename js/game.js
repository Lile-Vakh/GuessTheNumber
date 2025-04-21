let secretNum;
let score;
let attempts;
const feedback = document.getElementById("feedback");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guess");
const restartButton = document.getElementById("restart");
const inputError = document.getElementById("inputError");
const scoreDisplay = document.getElementById("score");
const attemptsNumDisplay = document.getElementById("attemptsNum");
const historyList = document.getElementById("historyList");

function startGame() {
    secretNum = Math.floor(Math.random() * 100) + 1;
    score = 10;
    attempts = 0;
    feedback.innerHTML = "";
    guessInput.disabled = false;
    guessInput.value = "";
    inputError.innerText = "";
    scoreDisplay.textContent = score;
    attemptsNumDisplay.textContent = attempts;
    historyList.innerHTML = "";
}

function showFeedback(message) {
    feedback.textContent = message;
}

function guessNum() {
    const number = parseInt(guessInput.value);
    if (number < 1 || number > 100) {
        inputError.textContent = "Please enter a number between 1 and 100!";
        return;
    }
    attempts += 1;
    score = score - 1;
    attemptsNumDisplay.textContent = attempts;
    scoreDisplay.textContent = score;
    
    if (number === secretNum) {
        showFeedback("🎉 Correct!");
        guessInput.disabled = true;
        return;
    }
    if (attempts >= 10) {
        showFeedback("💥 Game Over!");
        guessInput.disabled = true;
        return;
    }
    const isHighBool = number > secretNum;
    showFeedback(isHighBool ? "📉 Too High!" : "📈 Too Low!");

    const historyItem = document.createElement("li");
    historyItem.innerHTML = `You guessed <strong>${number}</strong> (${isHighBool ? " Too high " : " Too low "})`;
    historyList.appendChild(historyItem);
}
window.addEventListener("load", startGame);
guessButton.addEventListener("click", guessNum);
restartButton.addEventListener("click", startGame);
