/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let [sum, n] = [0, mat.length];
    
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[n - 1 - i][i];
    }
    if (n % 2) sum -= mat[(n - 1) / 2][(n - 1) / 2];
    
    return sum;
};