const express = require('express');
const router = express.Router();
const {
  startGame,
  makeGuess,
  restartGame
} = require('../controllers/gameController');

// Start new game
router.get('/start', startGame);

// Make a guess
router.post('/guess', makeGuess);

// Restart game
router.post('/restart', restartGame);

module.exports = router;
