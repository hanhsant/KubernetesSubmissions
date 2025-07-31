const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'random.txt');



router.get('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
  res.set('Content-Type', 'text/plain');
  res.send(data);
  });
});

module.exports = router;
