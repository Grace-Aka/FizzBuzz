const prompt = require('prompt-sync')();
// Prompt the user to enter a number
const input = prompt('Please enter a number: ');
// Parse the user's input to an integer
let number = parseInt(input);
// Loop through numbers from 1 to the user's input
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
