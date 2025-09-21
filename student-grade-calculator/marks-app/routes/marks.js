const express = require('express');
const router = express.Router();
const { calculateResults } = require('../controllers/marksController');

router.post('/', calculateResults);

module.exports = router;
