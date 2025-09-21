const express = require('express');
const app = express();
const gameRoutes = require('./routes/game');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/game', gameRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running. Use /api/game/start to play.');
});


// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Game backend running at http://localhost:${PORT}`);
});
