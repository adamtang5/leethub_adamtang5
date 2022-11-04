/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const checkSingle = row => {
        const tally = new Array(row.length).fill(0);
        for (let i = 0; i < row.length; i++) {
            if (tally[row[i] - 1] > 0) {
                return false;
            } else {
                tally[row[i] - 1]++;
            }
        }
        return true;
    };
    
    for (let r = 0; r < matrix.length; r++) {
        if (!checkSingle(matrix[r])) return false;
    }
    
    for (let c = 0; c < matrix.length; c++) {
        const col = matrix.map(r => r[c]);
        if (!checkSingle(col)) return false;
    }
    return true;
};