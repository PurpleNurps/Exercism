// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join(''))  + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  //  change value to a string and check if value[i] is equal to value.length - i;
  const stringValue = String(value);
  let result = false;
  for (let i = 0; i < stringValue.length / 2; i++) {
    if (stringValue[i] === stringValue[stringValue.length - 1 - i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // if (!input) {
  //   return 'Required field'
  // }

  // if (Number(input)) {
  //   return '';
  // } else if (!Number(input)) {
  //   return 'Must be a number besides 0';
  // }
  return !input ? 'Required field' : Number(input) ? '' : 'Must be a number besides 0';
}
