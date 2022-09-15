# @param {Integer[][]} grid
# @return {Integer}

def in_bounds(row, col, grid)
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
end

def is_land(row, col, grid)
    return in_bounds(row, col, grid) && grid[row][col] == 1
end

def dfs(row, col, grid, visited)
    return 1 if !is_land(row, col, grid)
    return 0 if visited.include?([row, col])
        
    visited.add([row, col])
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    ans = 0
    dirs.each do |row_diff, col_diff|
        new_row, new_col = row + row_diff, col + col_diff
        ans += dfs(new_row, new_col, grid, visited)
    end
    return ans
end

def island_perimeter(grid)
    visited = Set.new
    
    (0...grid.length).each do |row|
        (0...grid[row].length).each do |col|
            if is_land(row, col, grid)
                return dfs(row, col, grid, visited)
            end
        end
    end
end