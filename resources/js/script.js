const prompt = require('prompt-sync')();
// Prompt the user to enter a number
let input = prompt('Please enter a number: ');

// Parse the user's input to an integer
let number = parseInt(input);

// Loop through numbers from 1 to the user's input
function fizzBuzz() {
  for (var i = 1; i <= number; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
  // Check if the number is divisible by 3
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
  // Check if the number is divisible by 5
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
  // For other numbers, simply print the number
    else {
      console.log(i);
    }
  }

}
fizzBuzz();
