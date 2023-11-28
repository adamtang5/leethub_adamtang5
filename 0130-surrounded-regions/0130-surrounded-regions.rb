# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def is_edge?(r, c, board)
  r == 0 || r == board.length-1 || c == 0 || c == board[0].length-1
end

def inbound?(r, c, board)
  r >= 0 && r < board.length && c >= 0 && c < board[0].length
end

def solve(board)
  edge_island = []
  dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  
  (0...board.length).each do |r|
    (0...board[0].length).each do |c|
      edge_island << [r, c] if is_edge?(r, c, board) && board[r][c] == "O"
    end
  end
  
  visited = Set.new
  edge_island.each do |r, c|
    visited << [r, c]
    queue = [[r, c]]
    while !queue.empty?
      curr_r, curr_c = queue.shift
      dirs.each do |row_d, col_d|
        new_r, new_c = curr_r+row_d, curr_c+col_d
        if inbound?(new_r, new_c, board) && !visited.include?([new_r, new_c]) && board[new_r][new_c] == "O"
          queue << [new_r, new_c]
          visited << [new_r, new_c]
        end
      end
    end
  end
  
  (0...board.length).each do |r|
    (0...board[0].length).each do |c|
      board[r][c] = "X" if !is_edge?(r, c, board) && !visited.include?([r, c])
    end
  end
  nil
end