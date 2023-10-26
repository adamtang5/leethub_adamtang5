/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let level = 0;
  let left, right;
  while (level < triangle.length - 1) {
    level++;
    for (let i = 0; i <= level; i++) {
      left = i - 1 < 0 ? Infinity : triangle[level - 1][i - 1];
      right = i >= level ? Infinity : triangle[level - 1][i];
      triangle[level][i] += Math.min(left, right);
    }
  }
  return Math.min(...triangle[level]);
};