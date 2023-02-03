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
        if (target >= matrix[r][clb] && target <= matrix[r][cub]) {
            let [left, right] = [clb, cub];
            let pivot;
            while (left <= right) {
                pivot = Math.floor((left + right) / 2);
                if (target === matrix[r][pivot]) {
                    return true;
                } else if (target < matrix[r][pivot]) {
                    right = pivot - 1;
                } else if (target > matrix[r][pivot]) {
                    left = pivot + 1;
                }
            }
        }
    }
    return false;
};