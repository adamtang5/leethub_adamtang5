/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let [minRow, maxRow, minCol, maxCol, currNum, moveIdx] = [0, n - 1, 0, n - 1, 1, 0];

    const goRight = () => {
        for (let i = minCol; i <= maxCol; i++) {
            matrix[minRow][i] = currNum;
            currNum++;
        }
        minRow++;
    };
    
    const goDown = () => {
        for (let i = minRow; i <= maxRow; i++) {
            matrix[i][maxCol] = currNum;
            currNum++;
        }
        maxCol--;
    };
    
    const goLeft = () => {
        for (let i = maxCol; i >= minCol; i--) {
            matrix[maxRow][i] = currNum;
            currNum++;
        }
        maxRow--;
    };
    
    const goUp = () => {
        for (let i = maxRow; i >= minRow; i--) {
            matrix[i][minCol] = currNum;
            currNum++;
        }
        minCol++;
    };

    const moveSeq = [goRight, goDown, goLeft, goUp];

    while (currNum <= n * n) {
        moveSeq[moveIdx % 4]();
        moveIdx++;
    }

    return matrix;    
};