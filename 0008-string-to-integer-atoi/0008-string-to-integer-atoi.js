/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();
  let sign = 1;

  if (s[0] === '-') sign = -1;
  if (s[0] === '-' || s[0] === '+') s = s.slice(1);

  const digitsRe = /^\d+/;
  if (!s.match(digitsRe)) return 0;

  const ans = sign * +s.match(digitsRe)[0];

  return ans < 0 ? Math.max(ans, -2147483648) : Math.min(ans, 2147483647);
};