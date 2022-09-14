# @param {Character[][]} grid
# @return {Integer}

def in_bounds(row, col, grid)
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
end

def valid(row, col, grid, visited)
    return in_bounds(row, col, grid) && !visited.include?([row, col]) && grid[row][col] == '1'
end

def dfs(row, col, grid, visited)
    return 0 if !valid(row, col, grid, visited)
    visited.add([row, col])
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    dirs.each do |rowDiff, colDiff|
        dfs(row+rowDiff, col+colDiff, grid, visited)
    end
    return 1
end

def num_islands(grid)
    return 0 if grid.length == 0
    visited = Set.new
    ans = 0
    (0...grid.length).each do |row|
        (0...grid[row].length).each do |col|
            if !visited.include?([row, col])
                ans += dfs(row, col, grid, visited)
            end
        end
    end
    return ans
end