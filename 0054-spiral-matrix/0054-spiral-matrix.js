/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const [m, n] = [matrix.length, matrix[0].length];
    
    let [minRow, maxRow, minCol, maxCol] = [0, m - 1, 0, n - 1];
    const ans = [];

    const goRight = () => {
        for (let i = minCol; i <= maxCol; i++) {
            ans.push(matrix[minRow][i]);
        }
        minRow++;
    };
    
    const goDown = () => {
        for (let i = minRow; i <= maxRow; i++) {
            ans.push(matrix[i][maxCol]);
        }
        maxCol--;
    };
    
    const goLeft = () => {
        for (let i = maxCol; i >= minCol; i--) {
            ans.push(matrix[maxRow][i]);
        }
        maxRow--;
    };
    
    const goUp = () => {
        for (let i = maxRow; i >= minRow; i--) {
            ans.push(matrix[i][minCol]);
        }
        minCol++;
    };

    const moveSeq = [goRight, goDown, goLeft, goUp];

    let moveIdx = 0;
    while (maxRow >= minRow && maxCol >= minCol) {
        moveSeq[moveIdx % 4]();
        moveIdx++;
    }
    
    return ans;
};