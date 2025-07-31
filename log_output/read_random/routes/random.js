const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'random.txt');
const pingpongPath = path.join(directory, 'counter.txt');

router.get('/', (req, res) => {
  try {
    console.log('Route handler called');
    
    const logData = fs.readFileSync(filePath, 'utf8');
    const lines = logData.trim().split('\n').filter(line => line.trim() !== '');
    
    if (lines.length === 0) {
      return res.json({ error: 'No data available' });
    }
    
    const latestLine = lines[lines.length - 1];
    console.log('Latest line:', latestLine);
    
    // Parse the log line
    const timestampMatch = latestLine.match(/timestamp: ([^,]+)/);
    const randomStringMatch = latestLine.match(/randomString: (.+)/);
    
    const timestamp = timestampMatch ? timestampMatch[1].trim() : null;
    const randomString = randomStringMatch ? randomStringMatch[1].trim() : null;
    
    // Read counter with proper error handling
    let counter = 0;
    try {
      console.log('Attempting to read:', pingpongPath);
      const counterData = fs.readFileSync(pingpongPath, 'utf8');
      console.log('Counter data read:', counterData);
      counter = parseInt(counterData.trim(), 10) || 0;
      console.log('Parsed counter:', counter);
    } catch (counterError) {
      console.error('Failed to read counter file:', counterError.message);
      
      // Check what files exist in the directory
      try {
        const files = fs.readdirSync(directory);
        console.log('Files in directory:', files);
      } catch (dirError) {
        console.error('Cannot read directory:', dirError.message);
      }
    }
    
    console.log('Final response data:', { timestamp, randomString, counter });
    
    res.json({ 
      timestamp: timestamp,
      randomString: randomString,
      "Ping / Pongs": counter  
    });
    
  } catch (error) {
    console.error('Route handler error:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
});

module.exports = router;