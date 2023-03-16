const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const URL = args[0];
const filePath = args[1];

request(URL, (error, response, body) => {
  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
