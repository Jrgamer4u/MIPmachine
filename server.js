const express = require('express');
const server = express();

server.all('/', (req, res)=>{
  res.send('Your bot is alive!')
})
function keepAlive(){
  server.listen(3000, ()=>{console.log("Server is Ready!")});
}

function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);

module.exports = keepAlive;
