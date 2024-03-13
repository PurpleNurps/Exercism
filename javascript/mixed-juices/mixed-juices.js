// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // write a while loop while i < wedgesNeeded
  let i = 0;
  let result = 0;

  while (wedgesNeeded > 0 && i < limes.length) {
    // write a switch statement to plus 1 to the limesToCut and minus 6/8/10 from wedgesNeeded depending on size of lime
    switch (limes[i]) {
      case 'small':
        wedgesNeeded -= 6;
        result++;
        break;
      case 'medium':
        wedgesNeeded -= 8;
        result++;
        break;
      case 'large':
        wedgesNeeded -= 10;
        result++;
        break;

    }
    i++
  }
  return result;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  // create a do while loop while timeleft > 0 && orders.length > 0
    while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders[i])
    orders.shift()
    // timeLeft - timeToMixJuice(orders[i])
    // orders.shift()
    // i++
  };

  return orders

}
