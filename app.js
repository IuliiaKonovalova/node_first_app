const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('messageLogged', function () {
  console.log('Listener called')
});
emitter.emit('messageLogged', 1, 'url')

const files = fs.accessSync('./');
fs.readdir('./', function (err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(files);