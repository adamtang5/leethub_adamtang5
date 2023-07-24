/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const fact = n => {
    if (n === 0) return 1;
    return n * fact(n - 1);
  };
  
  const dfs = (q, s, ans=[]) => {
    if (s.length === 0) return ans;
    
    const subSize = fact(s.length - 1);
    const subIdx = Math.min(q / subSize);
    const ext = s.splice(subIdx, 1);
    return dfs(q % subSize, s, [...ans, ...ext]);
  }
  
  // const seq = _.range(1, n + 1);   * using lodash
  const seq = Array.from({ length: n }, (v, i) => (i + 1).toString());
  
  return dfs(k - 1, seq).join("");
};