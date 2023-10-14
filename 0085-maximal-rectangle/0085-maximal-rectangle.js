/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const h = new Array(matrix.length).fill();
  const v = new Array(matrix.length).fill();
  matrix.forEach((row, r) => {
    h[r] = row.map(d => +d);
    v[r] = row.map(d => +d);
  });
  for (let r = 0; r < matrix.length; r++) {
    for (let c = matrix[0].length - 2; c >= 0; c--) {
      if (h[r][c] > 0) h[r][c] = h[r][c + 1] + 1;
    }
  }
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = matrix.length - 2; r >= 0; r--) {
      if (v[r][c] > 0) v[r][c] = v[r + 1][c] + 1;
    }
  }
  let [ans, ht, wd] = [0, 1, 1];
  const thSet = new Set();
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      thSet.clear();
      if (h[r][c] && v[r][c]) {
        for (let j = 0; j < h[r][c]; j++) thSet.add(v[r][c + j]);
        for (let th of thSet) {
          wd = 0;
          while (wd < h[r][c] && v[r][c + wd] >= th) wd++;
          ans = Math.max(ans, wd * th);
        }
        thSet.clear();
        for (let i = 0; i < v[r][c]; i++) thSet.add(h[r + i][c]);
        for (let th of thSet) {
          ht = 0;
          while (ht < v[r][c] && h[r + ht][c] >= th) ht++;
          ans = Math.max(ans, ht * th);
        }
        thSet.clear();
      }
    }
  }
  return ans;
};