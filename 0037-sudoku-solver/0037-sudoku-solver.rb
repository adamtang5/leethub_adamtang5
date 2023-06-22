# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def backtrack(r, c, board, solved, rows, cols, subs)
  if r == 9
    solved[0] = true
    return
  end

  next_r, next_c = r+(c+1)/9, (c+1)%9
  if board[r][c] != '.'
    backtrack(next_r, next_c, board, solved, rows, cols, subs)
  else
    (1..9).each do |d|
      sub_idx = r/3*3 + c/3
      if !rows[r].include?(d) && !cols[c].include?(d) && !subs[sub_idx].include?(d)
        rows[r].add(d)
        cols[c].add(d)
        subs[sub_idx].add(d)
        board[r][c] = d.to_s

        backtrack(next_r, next_c, board, solved, rows, cols, subs)

        if !solved[0]
          rows[r].delete(d)
          cols[c].delete(d)
          subs[sub_idx].delete(d)
          board[r][c] = '.'
        end
      end
    end
  end
end

def solve_sudoku(board)
  solved = [false]
  rows = Array.new(9){ Set.new() }
  cols = Array.new(9){ Set.new() }
  subs = Array.new(9){ Set.new() }
  (0...9).each do |r|
    (0...9).each do |c|
      if board[r][c] != '.'
        d = board[r][c].to_i
        sub_idx = r/3*3 + c/3
        rows[r].add(d)
        cols[c].add(d)
        subs[sub_idx].add(d)
      end
    end
  end
  
  backtrack(0, 0, board, solved, rows, cols, subs)
end