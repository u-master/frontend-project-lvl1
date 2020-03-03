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
*/

// Sort two numbers from lower to high, return array of sorted pair
const sortTwoNumbers = (a, b) => ((a < b) ? [b, a] : [a, b]);

// Generate random number and return it
const generateNumber = (min, max) => {
  const [low, high] = sortTwoNumbers(min, max);
  return Math.round(Math.random() * (high - low)) + low;
};

// Find GDC of two numbers
const calculateGcd = (num1, num2) => {
  const [a, b] = sortTwoNumbers(num1, num2);
  const remains = a % b;
  if (remains === 0 || b === 0) {
    return b;
  }
  return calculateGcd(b, remains);
};

export { generateNumber, calculateGcd };
