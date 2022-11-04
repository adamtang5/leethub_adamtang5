/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));

    let [minRow, maxRow, minCol, maxCol] = [0, n - 1, 0, n - 1];
    let currNum = 1;

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

    let moveIdx = 0;
    while (currNum <= n * n) {
        moveSeq[moveIdx % 4]();
        moveIdx++;
    }

    return matrix;    
};