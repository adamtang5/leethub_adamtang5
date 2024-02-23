/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  const reduce = n => {
    let ans = 0;
    while (n > 0) {
      ans += n % 10;
      n = Math.floor(n / 10);
    }
    return ans;
  };
  
  while (num >= 10) num = reduce(num);
  return num;
};