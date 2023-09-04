/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const valid = segment => {
    if (segment.length === 1) return segment !== '0';
    if (segment.length === 2) {
      if (!('12'.includes(segment[0]))) return false;
      if (segment[0] === '1') return true;
      if (segment[0] === '2') return segment[1] <= '6';
    }
    return true;
  };

  if (s.length === 1) return valid(s) ? 1 : 0;

  const partition = str => {
    const ans = [];
    let [curr, lBit, rBit, l, r] = [str[0], str[0], str[1], 0, 1];
    let double = lBit + rBit;
    while (r < str.length) {
      if (!valid(double)) {
        ans.push(curr);
        curr = rBit;
      } else if (!valid(rBit)) {
        curr = curr.slice(0, -1);
        if (curr) ans.push(curr);
        curr = double;
      } else {
        curr += rBit;
      }
      l++;
      lBit = str[l];
      r++;
      if (r < str.length) {
        rBit = str[r];
        double = lBit + rBit;
      }
    }
    ans.push(curr);
    return ans;
  };

  const fib = n => {
    if (n < 2) return 1;
    const dp = new Array(2).fill(1);
    while (n >= 2) {
      [dp[0], dp[1]] = [dp[1], dp[0] + dp[1]];
      n--;
    }
    return dp[1];
  };

  const segments = partition(s);
  if (segments.some(segment => !valid(segment))) return 0;
  let prod = 1;
  segments.forEach(segment => {
    if (!(segment.includes('0'))) {
      prod *= fib(segment.length);
    }
  });
  return prod;
};