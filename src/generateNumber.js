/* Common functions */

/**
*
* generateNumber - generate a random number from min to max value
*   GET:  min - Minimal random number
*         max - Maximal random number.
*   RETURN:
*     random generated number
*
*/


// Generate random number and return it
const generateNumber = (min, max) => ((Math.round(Math.random() * (max - min)) + min));

export default generateNumber;
