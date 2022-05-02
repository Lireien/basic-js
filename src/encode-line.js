const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let strToArr = str.split("");
  let counter = 1;

  for (let i = 0; i < strToArr.length; i++) {
    let tmp;
    if (strToArr[i] === strToArr[i + 1]) {
      counter++;
    } else {
      if (counter === 1) {
        tmp = `${strToArr[i]}`;
      } else {
        tmp = `${counter}${strToArr[i]}`;
      }
      result.push(tmp);
      counter = 1;
    }
  }

  return result.join("");
}

module.exports = {
  encodeLine
};
