/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const reassign = (matrix, width, corner) => {
        if (width === 1) return;
        const [lb, ub] = [corner, corner + width - 1];
        for (let i = 0; i < width - 1; i++) {
            [
                matrix[lb][lb+i],
                matrix[lb+i][ub],
                matrix[ub][ub-i],
                matrix[ub-i][lb]
            ] = [
                matrix[ub-i][lb],
                matrix[lb][lb+i],
                matrix[lb+i][ub],
                matrix[ub][ub-i]
            ]
        }
    };
    
    for (let w = matrix.length; w > 1; w -= 2) {
        reassign(matrix, w, (matrix.length - w) / 2);
    }
};