const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] != '--discard-next' &&
      arr[i] != '--discard-prev' &&
      arr[i] != '--double-next' &&
      arr[i] != '--double-prev'
    ) {
      copyArr.push(arr[i]);
    }
    switch (arr[i]) {
      case '--discard-next':
        if (i == arr.length - 1) break;
        i++;
        if (
          arr[i + 1] == '--double-prev' ||
          arr[i + 1] == '--discard-prev' ||
          arr[i + 1] == '--double-next'
        )
          i++;
        break;
      case '--discard-prev':
        if (i == 0) break;
        copyArr.pop();
        break;
      case '--double-next':
        if (i == arr.length - 1) break;
        copyArr.push(arr[i + 1]);
        copyArr.push(arr[i + 1]);
        i++;
        break;
      case '--double-prev':
        if (i == 0) break;
        copyArr.push(arr[i - 1]);
    }
  }
  return copyArr;
}

module.exports = {
  transform,
};
