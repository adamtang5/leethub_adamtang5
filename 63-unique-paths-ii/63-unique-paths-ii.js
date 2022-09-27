/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const [nRows, nCols] = [obstacleGrid.length, obstacleGrid[0].length];
    const dp = new Array(nRows+1).fill().map(() => new Array(nCols+1));
    for (let r = 0; r < nRows+1; r++) {
        dp[r][nCols] = 0;
    }
    for (let c = 0; c < nCols+1; c++) {
        dp[nRows][c] = 0;
    }
    dp[nRows-1][nCols-1] = obstacleGrid[nRows-1][nCols-1] === 1 ? 0 : 1;
        
    for (let r = nRows - 1; r >= 0; r--) {
        for (let c = nCols - 1; c >= 0; c--) {
            if (r !== nRows - 1 || c !== nCols - 1) {
                dp[r][c] = obstacleGrid[r][c] === 0 ? dp[r+1][c] + dp[r][c+1] : 0;
            }
        }
    }
    
    return obstacleGrid[nRows-1][nCols-1] === 1 ? 0 : dp[0][0];
};