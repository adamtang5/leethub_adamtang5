# @param {Integer[][]} grid
# @return {Integer}

def in_bounds(row, col, grid)
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
end

def valid(row, col, grid, visited)
    return in_bounds(row, col, grid) && !visited.include?([row, col]) && grid[row][col] == 1
end

def dfs(row, col, grid, visited)
    return 0 if !valid(row, col, grid, visited)
    
    visited.add([row, col])
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    return dirs.reduce(1) { |sum, dir| sum + dfs(row+dir[0], col+dir[1], grid, visited) }
end

def max_area_of_island(grid)
    visited = Set.new
    max_size = 0
    
    (0...grid.length).each do |row|
        (0...grid[row].length).each do |col|
            if valid(row, col, grid, visited)
                max_size = [max_size, dfs(row, col, grid, visited)].max
            end
        end
    end
    
    return max_size
end