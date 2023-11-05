/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  let [l, r] = [0, numbers.length - 1];
  while (l < r) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};