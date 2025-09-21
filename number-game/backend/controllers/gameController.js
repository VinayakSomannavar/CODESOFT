let randomNumber = null;
let attemptsLeft = 10;
let score = 0;

const MAX_ATTEMPTS = 10;

exports.startGame = (req, res) => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = MAX_ATTEMPTS;
  res.json({ message: 'New game started', attemptsLeft });
};

exports.makeGuess = (req, res) => {
  const { guess } = req.body;

  if (!randomNumber) {
    return res.status(400).json({ error: 'Game not started. Call /start first.' });
  }

  if (attemptsLeft <= 0) {
    return res.json({ message: 'No attempts left. Please restart the game.' });
  }

  const userGuess = parseInt(guess);
  attemptsLeft--;

  if (userGuess === randomNumber) {
    score++;
    const response = {
      message: `🎉 Correct! The number was ${randomNumber}.`,
      result: 'correct',
      score,
      attemptsLeft,
    };
    randomNumber = null; // End current round
    return res.json(response);
  }

  let hint = userGuess < randomNumber ? 'Too low' : 'Too high';

  const response = {
    message: hint,
    result: 'incorrect',
    attemptsLeft,
    score
  };

  if (attemptsLeft === 0) {
    response.message = `😢 Game over! The number was ${randomNumber}`;
    randomNumber = null;
  }

  res.json(response);
};

exports.restartGame = (req, res) => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = MAX_ATTEMPTS;
  res.json({ message: 'Game restarted', attemptsLeft });
};
