const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'counter.txt');

let counter = 0;

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

if (fs.existsSync(filePath)) {
 try {
    const data = fs.readFileSync(filePath, 'utf8');
    counter = parseInt(data, 10) || 0;
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

router.get('/', (req, res) => {
  counter++;
  try {
    fs.writeFileSync(filePath, counter.toString());
  } catch (error) {
    console.error('Error writing file:', error);
    return res.status(500).json({ error: 'Error writing counter file' });
  }
  res.json({ message: 'pong', counter });
});

module.exports = router;
