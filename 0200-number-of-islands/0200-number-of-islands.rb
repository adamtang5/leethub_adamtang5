# @param {Character[][]} grid
# @return {Integer}
def in_bounds(row, col, grid)
  row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
end

def valid(row, col, grid, visited)
  in_bounds(row, col, grid) && !visited.include?([row, col]) && grid[row][col] == '1'
end

def dfs(row, col, grid, visited, dirs)
  return 0 if !valid(row, col, grid, visited)
  visited.add([row, col])
  dirs.each{ |row_diff, col_diff| dfs(row+row_diff, col+col_diff, grid, visited, dirs) }
  1
end

def num_islands(grid)
  return 0 if grid.length == 0
  ans, visited = 0, Set.new
  dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  (0...grid.length).each do |row|
    (0...grid[row].length).each do |col|
      ans += dfs(row, col, grid, visited, dirs) if !visited.include?([row, col])
    end
  end
  ans
end