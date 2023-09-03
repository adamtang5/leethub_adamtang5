/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const bitSeq = n => {
    if (n === 1) return new Array(2).fill(0);
    const lastSeq = bitSeq(n - 1);
    lastSeq[lastSeq.length - 1] = n - 1;
    return [...lastSeq, ...lastSeq];
  };
  
  const seq = bitSeq(n);
  const ans = new Array(2 ** n).fill(0);
  for (let i = 0; i < ans.length - 1; i++) {
    ans[i + 1] = ans[i] ^ (1 << (n - 1 - seq[i]));
  }
  return ans;
};