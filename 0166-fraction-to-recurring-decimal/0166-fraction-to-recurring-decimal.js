/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  let [pre, post] = ["", ""];
  let [num, denom] = [Math.abs(numerator), Math.abs(denominator)];
  let prev;
  const dp = {};
  let d = Math.floor(num / denom);
  pre = d.toString();
  num -= d * denom;
  while (num !== 0) {
    num *= 10;
    // console.log(num, dp);
    if (num in dp) {
      if (prev !== undefined) post = dp[prev].val;
      let [i, curr] = [1, prev];
      while (curr !== num) {
        curr = dp[curr].prev;
        i++;
      }
      const first = post.slice(0, post.length - i);
      const second = post.slice(post.length - i);
      post = `${first}(${second})`;
      return numerator === 0 || numerator > 0 && denominator > 0 || numerator < 0 && denominator < 0 ?
        `${pre}.${post}` : `-${pre}.${post}`;
    }
    d = Math.floor(num / denom);
    post += d.toString();
    if (!(num in dp)) {
      dp[num] = {
        val: prev !== undefined ? dp[prev].val + d.toString() : d.toString(),
        prev,
      };
    }
    prev = num;
    num -= d * denom;
  }
  let ans = pre + (post.length ? "." + post : "");
  return numerator === 0 || numerator > 0 && denominator > 0 || numerator < 0 && denominator < 0 ?
    ans : "-" + ans;
};