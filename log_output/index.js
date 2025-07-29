const crypto = require('crypto');

const app = ()=> {
 const randomString = crypto.randomUUID();
 setInterval(() => {
   const timestamp = new Date().toISOString();

   console.log(`${timestamp}: ${randomString}`);
   
 }, 5000);
}

app();
module.exports = app;