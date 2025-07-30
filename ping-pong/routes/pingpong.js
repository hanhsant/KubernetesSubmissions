const express = require('express');
const router = express.Router();



let counter = 0;
router.get('/', (req, res) => {
  counter++;
  res.json({ message: 'pong', counter });
});

module.exports = router;
