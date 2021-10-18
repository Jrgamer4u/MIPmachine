const express = require('express');
const server = express();

var bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(bodyParser.json())
server.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

server.all('/', (req, res)=>{
  res.send('Your bot is alive!')
})
function keepAlive(){
  server.listen(3000, ()=>{console.log("Server is Ready!")});
}
server.get('/', function (req, res, next) {
  Promise.resolve().then(function () {
    throw new Error('BROKEN')
  }).catch(next) // Errors will be passed to Express.
})
module.exports = keepAlive;