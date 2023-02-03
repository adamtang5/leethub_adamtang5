/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let [rlb, rub, clb, cub] = [0, matrix.length - 1, 0, matrix[0].length - 1];
    for (let i = 0; i < matrix[0].length; i++) {
        if (target < matrix[0][i]) {
            cub = i - 1;
            break;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (target < matrix[i][0]) {
            rub = i - 1;
            break;
        }
    }
    for (let i = rub; i >= 0; i--) {
        if (target > matrix[i][cub]) {
            rlb = i + 1;
            break;
        }
    }
    for (let i = cub; i >= 0; i--) {
        if (target > matrix[rub][i]) {
            clb = i + 1;
            break;
        }
    }
    
    let left, right, pivot;

    for (let r = rlb; r <= rub; r++) {
        if (target >= matrix[r][clb] && target <= matrix[r][cub]) {
            [left, right] = [clb, cub];
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