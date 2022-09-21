/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const [m, n] = [heights.length, heights[0].length];
    const pacSet = new Set();
    const atlSet = new Set();
    let visited = new Set();
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for (let r = 0; r < m; r++) {
        pacSet.add(JSON.stringify([r, 0]));
        atlSet.add(JSON.stringify([r, n - 1]));
    }
    
    for (let c = 0; c < n; c++) {
        pacSet.add(JSON.stringify([0, c]));
        atlSet.add(JSON.stringify([m - 1, c]));
    }
    
    const inBounds = (r, c) => {
        return r >= 0 && r < m && c >= 0 && c < n;
    };
    
    const valid = (sr, sc, dr, dc) => {
        return !visited.has(JSON.stringify([dr, dc])) && inBounds(dr, dc) && heights[sr][sc] <= heights[dr][dc];
    };
    
    const dfs = (r, c, ocean) => {
        if (!visited.has(JSON.stringify([r, c]))) {
            visited.add(JSON.stringify([r, c]));
            dirs.forEach(([rd, cd]) => {
                const [newR, newC] = [r + rd, c + cd];
                if (valid(r, c, newR, newC)) {
                    switch (ocean) {
                        case 'pac':
                            if (pacSet.has(JSON.stringify([r, c]))) pacSet.add(JSON.stringify([newR, newC]));
                            break;
                        case 'atl':
                            if (atlSet.has(JSON.stringify([r, c]))) atlSet.add(JSON.stringify([newR, newC]));
                            break;
                        default:
                            break;
                    }
                    dfs(newR, newC, ocean);
                }
            });
        }
    };
    
    Array.from(pacSet).map(el => JSON.parse(el)).forEach(([r, c]) => dfs(r, c, 'pac'));

    visited = new Set();
    
    Array.from(atlSet).map(el => JSON.parse(el)).forEach(([r, c]) => dfs(r, c, 'atl'));
    
    let intersect = new Set([...pacSet].filter(el => atlSet.has(el)));
    return Array.from(intersect).map(coord => JSON.parse(coord));
};