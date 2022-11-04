/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
    }
    for (let i = 0; i < mat.length; i++) {
        sum += mat[mat.length - 1 - i][i];
    }
    
    if (mat.length % 2) sum -= mat[(mat.length - 1) / 2][(mat.length - 1) / 2];
    
    return sum;
};