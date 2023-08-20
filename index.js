const fs = require('fs');

// Function to execute after the current event loop iteration
process.nextTick(() => {
  console.log('process.nextTick() callback executed');
});

// Promise example
Promise.resolve().then(() => {
  console.log('Promise resolved');
});

// setTimeout example
setTimeout(() => {
  console.log('setTimeout() callback executed');
}, 0);

// setInterval example (stops after 2 seconds)
const interval = setInterval(() => {
  console.log('setInterval() callback executed');
}, 500);

setTimeout(() => {
  clearInterval(interval);
  console.log('setInterval() stopped after 2 seconds');
}, 2000);

// setImmediate example
setImmediate(() => {
  console.log('setImmediate() callback executed');
});

// File reading example
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File read complete');
  }
});

// Function to measure execution time
function sumNumbers() {
  let sum = 0;
  for (let i = 1; i <= 1000000; i++) {
    sum += i;
  }
  console.log('Sum of numbers: ' + sum);
}

const start = process.hrtime();
sumNumbers();
const end = process.hrtime(start);
console.log('Execution time (hrtime): %ds %dms', end[0], end[1] / 1000000);
