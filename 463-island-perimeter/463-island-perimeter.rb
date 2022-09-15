# @param {Integer[][]} grid
# @return {Integer}

def in_bounds(row, col, grid)
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
end

def is_land(row, col, grid)
    return in_bounds(row, col, grid) && grid[row][col] == 1
end

def dfs(row, col, grid, visited, count)
    visited.add([row, col])
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    dirs.each do |row_diff, col_diff|
        new_row, new_col = row + row_diff, col + col_diff
        if is_land(new_row, new_col, grid) && !visited.include?([new_row, new_col])
            dfs(new_row, new_col, grid, visited, count)
        elsif !is_land(new_row, new_col, grid)
            count[0] += 1
        end
    end
end

def island_perimeter(grid)
    ans = [0]
    visited = Set.new
    
    (0...grid.length).each do |row|
        (0...grid[row].length).each do |col|
            if is_land(row, col, grid)
                dfs(row, col, grid, visited, ans)
                return ans[0]
            end
        end
    end
end