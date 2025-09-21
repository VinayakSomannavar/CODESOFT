const API_BASE = 'http://localhost:3001/api/game';

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const playAgainButton = document.getElementById('playAgainButton');
const message = document.getElementById('message');
const attemptCount = document.getElementById('attemptCount');
const scoreCount = document.getElementById('scoreCount');

let attemptsLeft = 10;
let score = 0;

// Start game on page load
startGame();

async function startGame() {
  try {
    const response = await fetch(`${API_BASE}/start`);
    const data = await response.json();
    attemptsLeft = data.attemptsLeft;
    attemptCount.textContent = attemptsLeft;
    message.textContent = 'Game started. Enter your guess!';
    guessInput.disabled = false;
    guessButton.disabled = false;
    playAgainButton.style.display = 'none';
    guessInput.value = '';
  } catch (error) {
    console.error('Error starting game:', error);
  }
}

guessButton.addEventListener('click', async () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/guess`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess })
    });

    const data = await response.json();
    message.textContent = data.message;

    attemptsLeft = data.attemptsLeft ?? 0;
    attemptCount.textContent = attemptsLeft;
    scoreCount.textContent = data.score ?? score;

    if (data.result === 'correct' || attemptsLeft === 0) {
      guessInput.disabled = true;
      guessButton.disabled = true;
      playAgainButton.style.display = 'inline-block';
    }
  } catch (error) {
    console.error('Error making guess:', error);
  }
});

playAgainButton.addEventListener('click', () => {
  startGame();
});
