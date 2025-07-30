const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const randomString = crypto.randomUUID();

let currentStatus = {
  timestamp: new Date().toISOString(),
  randomString: randomString
};

setInterval(() => {
   currentStatus.timestamp = new Date().toISOString();

   console.log(`${currentStatus.timestamp}: ${currentStatus.randomString}`);

 }, 5000);

router.get('/', (req, res) => {

  res.json(currentStatus);
});

module.exports = router;
