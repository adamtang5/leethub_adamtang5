/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let [rlb, rub, clb, cub] = [0, matrix.length - 1, 0, matrix[0].length - 1];
    while (rlb < matrix.length) {
        if (target > matrix[rlb].at(-1)) {
            rlb++;
        } else {
            break;
        }
    }
    while (rub >= 0) {
        if (target < matrix[rub][0]) {
            rub--;
        } else {
            break;
        }
    }
    
    while (clb < matrix[0].length) {
        if (target > matrix.at(-1)[clb]) {
            clb++;
        } else {
            break;
        }
    }
    while (cub >= 0) {
        if (target < matrix[0][cub]) {
            cub--;
        } else {
            break;
        }
    }
    
    for (let r = rlb; r <= rub; r++) {
        for (let c = clb; c <= cub; c++) {
            if (target === matrix[r][c]) return true;
        }
    }
    return false;
};