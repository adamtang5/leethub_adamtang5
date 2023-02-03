/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rowBinarySearch = (matrix, target, rlb, rub, clb, cub) => {
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

    const colBinarySearch = (matrix, target, rlb, rub, clb, cub) => {
        let left, right, pivot;
        for (let c = clb; c <= cub; c++) {
            if (target >= matrix[rlb][c] && target <= matrix[rub][c]) {
                [left, right] = [rlb, rub];
                while (left <= right) {
                    pivot = Math.floor((left + right) / 2);
                    if (target === matrix[pivot][c]) {
                        return true;
                    } else if (target < matrix[pivot][c]) {
                        right = pivot - 1;
                    } else if (target > matrix[pivot][c]) {
                        left = pivot + 1;
                    }
                }
            }
        }
        return false;
    };
    
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
    
    if ((rub - rlb) >= (cub - clb)) {
        return rowBinarySearch(matrix, target, rlb, rub, clb, cub);
    } else {
        return colBinarySearch(matrix, target, rlb, rub, clb, cub);
    }
};