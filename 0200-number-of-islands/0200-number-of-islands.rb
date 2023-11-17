# @param {Character[][]} grid
# @return {Integer}
def in_bounds(row, col, grid)
  row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
end

def valid(row, col, grid, visited)
  in_bounds(row, col, grid) && !visited.include?([row, col]) && grid[row][col] == '1'
end

def bfs(row, col, grid, visited, dirs)
  q = [[row, col]]
  visited.add([row, col])
  while !q.empty?
    curr_row, curr_col = q.shift
    dirs.each do |row_diff, col_diff|
      new_row, new_col = curr_row+row_diff, curr_col+col_diff
      if valid(new_row, new_col, grid, visited)
        q << [new_row, new_col]
        visited.add([new_row, new_col])
      end
    end
  end
  nil
end

def num_islands(grid)
  return 0 if grid.empty?
  ans, visited = 0, Set.new
  dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  (0...grid.length).each do |row|
    (0...grid[0].length).each do |col|
      if valid(row, col, grid, visited)
        bfs(row, col, grid, visited, dirs)
        ans += 1
      end
    end
  end
  ans
end