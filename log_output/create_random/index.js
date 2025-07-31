
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'random.txt');
const randomString = crypto.randomUUID();


const app = () => {
 
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}
 
setInterval(() => {
  const timestamp = new Date().toISOString();
  const logLine = `timestamp: ${timestamp}, randomString: ${randomString}\n`;

  fs.appendFileSync(filePath, logLine);
}, 5000);
}
app();
module.exports = app;