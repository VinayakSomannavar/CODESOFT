const express = require('express');
const app = express();
const path = require('path');
const marksRoutes = require('./routes/marks');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // for parsing JSON from frontend

app.get('/', (req, res) => {
  res.send('Welcome to the Student Grade Calculator!');
});


app.use('/api/marks', marksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


