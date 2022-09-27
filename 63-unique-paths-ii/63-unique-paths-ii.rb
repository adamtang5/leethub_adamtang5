# @param {Integer[][]} obstacle_grid
# @return {Integer}

def in_bounds(r, c, grid)
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length
end

def dp_value(r, c, grid, dp)
    return in_bounds(r, c, grid) ? dp[r][c] : 0
end

def unique_paths_with_obstacles(obstacle_grid)
    return 0 if obstacle_grid[-1][-1] == 1
    dp = Array.new(obstacle_grid.length) { Array.new(obstacle_grid[0].length, nil) }
    dp[-1][-1] = obstacle_grid[-1][-1] == 1 ? 0 : 1
    
    (obstacle_grid.length-1).downto(0).each do |r|
        (obstacle_grid[0].length-1).downto(0).each do |c|
            if r != obstacle_grid.length-1 || c != obstacle_grid[0].length-1
                dp[r][c] = obstacle_grid[r][c] == 0 ? dp_value(r+1, c, obstacle_grid, dp) + dp_value(r, c+1, obstacle_grid, dp) : 0
            end
        end
    end
    return dp[0][0]
end