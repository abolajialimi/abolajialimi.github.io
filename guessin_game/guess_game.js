let score = 10;
let historyHighScore = 0;
let guessHistory = [];
const scoreDisplay = document.querySelector('.scoreDisplay')
const highscore  = document.querySelector('.highscore')
const input  = document.querySelector('.input')
const btn  = document.querySelector('.check')
const msg  = document.querySelector('.msg')
const resetBtn = document.querySelector('.resetBtn');
const reactionImg = document.querySelector('.reactionImg');
const historyList = document.querySelector('.guessHistoryList');
const container = document.querySelector('.container');
const secretNumberBox = document.querySelector('.secretNumber');


const imageOptions = [
'Images/pic1.png',
'Images/pic2.png',
'Images/pic3.png',
'Images/pic4.png',
'Images/pic5.png'
];
console.log(msg.textContent); // Outputs: This is a message.


let randomValue = Math.floor(Math.random() * 100) + 1;
console.log(randomValue)


function updateScoreDisplay() {
    scoreDisplay.textContent = `${score}`;
}
function showHistoryHighscore() {
    if (score > historyHighScore) {
        historyHighScore = score;
        highscore.textContent =   ` ${historyHighScore}`;
      }
}


btn.addEventListener('click', function(){
    const userInput = input.value.trim();
    const value = Number(input.value);
    // Show a new random face on each guess
    const randomImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
    reactionImg.src = randomImage;

if (guessHistory.includes(value)) {
        msg.textContent = `⛔ You've already guessed ${value}. Try something new.`;
        input.value = ''; // clear input field
        return;
      }


if (!userInput || isNaN(value) || value < 1 || value > 100) {
    msg.textContent = '⚠️ Enter a number between 1 and 100 ONLY';
    input.value = ''; // clear input field
    return;
}
if (score <= 0) {
    msg.textContent = '💀 Game Over! Click reset to try again.';
    return;
}


if (value === randomValue) {
    msg.textContent = `🎉 Success! You guessed the secret number: ${randomValue} with score: ${score}`;
    input.disabled = true;
    btn.disabled = true;
    reactionImg.src = 'Images/win.png';  // Show win picture
    showHistoryHighscore(score)
    container.classList.add('success');
    container.classList.remove('failed', 'guessing');
    secretNumberBox.textContent = randomValue;

    return;
}


score--;
updateScoreDisplay();


if (score === 0) {
    msg.textContent = '💀 Game Over! You ran out of attempts.';
    input.disabled = true;
    btn.disabled = true;
    reactionImg.src = 'Images/lose.png';  // Show lose picture
    container.classList.add('failed');
    container.classList.remove('success', 'guessing');
    secretNumberBox.textContent = randomValue;


} else if (value < randomValue) {
    msg.textContent = `⬆️ Too low! Try a higher number. Score: ${score}`;
    container.classList.add('guessing');
    container.classList.remove('success', 'failed');

    // guessHistory.push(value);
    console.log('Guess History:', guessHistory);
    input.value = ''; // clear input field

} else {
    msg.textContent = `⬇️ Too high! Try a lower number. Score: ${score}`;
    container.classList.add('guessing');
    container.classList.remove('success', 'failed');

    // guessHistory.push(value);
    console.log('Guess History:', guessHistory);
    input.value = ''; // clear input field
}

// // Store valid guess
guessHistory.push(value);
// Update the UI with guess history

updateHistory();

showHistoryHighscore()
});

resetBtn.addEventListener('click', function () {
randomValue = Math.floor(Math.random() * 100) + 1;
console.log(randomValue)
score = 10;
updateScoreDisplay();
// showHistoryHighscore()
msg.textContent = '🔄 Game reset! Enter a new number between 1 and 100.';
guessHistory = [];
historyList.innerHTML = ''; // Clear list on page
input.value = '';
input.disabled = false;
btn.disabled = false;
container.classList.remove('success', 'failed', 'guessing');


reactionImg.src = imageOptions[Math.floor(Math.random() * imageOptions.length)];
secretNumberBox.textContent = '?';

});
// Function to update the history list in HTML
function updateHistory(guess) {
    historyList.innerHTML = ''; // Clear previous list
    guessHistory.forEach((guess, index) => {
      const li = document.createElement('li');
      li.textContent = `Guess ${index + 1}: ${guess}`;
      historyList.appendChild(li);
    });
  }