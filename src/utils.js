/* Common functions */

/**
*
* generateNumber - generate a random number from min to max value
*   GET:  min - Minimal random number
          max - Maximal random number.
*   RETURN:
*     random generated number
*
*
* calculateGcd - find greatest common divisor of two numbers
*   GET: num1, num2  - two numbers
*   RETURN: GCD of num1 and num2
*
*
* isEven - Is number even or not?
*   GET: num - number to check
*   RETURN: true if num is even, false if num is odd
*
*
* isPrime - Is number prime or not?
*   GET: num - number to check
*   RETURN: true if num is prime, otherwise - false
*/


// Generate random number and return it
const generateNumber = (min, max) => ((Math.round(Math.random() * (max - min)) + min));

// Find GDC of two numbers
const calculateGcd = (num1, num2) => {
  const [a, b] = ((num1 < num2) ? [num2, num1] : [num1, num2]);
  const remains = a % b;
  if (remains === 0 || b === 0) {
    return b;
  }
  return calculateGcd(b, remains);
};

// Check if number is even
const isEven = (num) => (num % 2 === 0);

// Check if number is prime
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const maxDivisor = Math.floor(num / 2);
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

export {
  generateNumber,
  calculateGcd,
  isEven,
  isPrime,
};
