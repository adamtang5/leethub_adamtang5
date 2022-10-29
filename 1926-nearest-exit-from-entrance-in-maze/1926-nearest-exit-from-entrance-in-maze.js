/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const [ROWS, COLS] = [maze.length, maze[0].length];
    const steps = new Array(ROWS).fill().map(() => new Array(COLS).fill(Infinity));
    steps[entrance[0]][entrance[1]] = 0;
    
    const distance = ([r1, c1], [r2, c2]) => {
        return Math.abs(r1 - r2) + Math.abs(c1 - c2);
    };
    
    const visited = new Set();
    visited.add(`${entrance[0]}-${entrance[1]}`);
    
    const valid = (r, c) => {
        return r >= 0 && r < ROWS && c >= 0 && c < COLS && !visited.has(`${r}-${c}`) && maze[r][c] !== '+';
    };
    
    const isExit = (r, c) => {
        return (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) &&
            (entrance[0] !== r || entrance[1] !== c) &&
            maze[r][c] === '.';
    };
    
    const queue = [entrance];
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    while (queue.length) {
        const [r, c] = queue.shift();
        dirs.forEach(([rd, cd]) => {
            const [nr, nc] = [r + rd, c + cd];
            if (valid(nr, nc)) {
                steps[nr][nc] = Math.min(steps[nr][nc], steps[r][c] + 1);
                visited.add(`${nr}-${nc}`);
                queue.push([nr, nc]);
            }
        });
    }
    
    const exits = [];
    maze.forEach((row, r) => {
        row.forEach((col, c) => {
            if (isExit(r, c)) exits.push([r, c]);
        });
    });
    
    if (!exits.length) return -1;
    
    const minSteps = exits.reduce((min, [r, c]) => steps[r][c] < min ? steps[r][c] : min, Infinity);
    return minSteps === Infinity ? -1 : minSteps;
};