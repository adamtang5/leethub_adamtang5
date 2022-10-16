# @param {Character[][]} board
# @return {Boolean}
def check_9(arr)
    arr = arr.select{ |cell| cell != '.' }
    arr = arr.sort
    (1...arr.length).each do |i|
        return false if arr[i-1] == arr[i]
    end
    return true
end

def check_rows(board)
    (0...9).each do |i|
        return false if !check_9(board[i])
    end
    return true
end

def check_cols(board)
    (0...9).each do |i|
        return false if !check_9(board.map{ |r| r[i] })
    end
    return true
end

def get_grid(r, c, board)
    ans = []
    (0...3).each do |i|
        (0...3).each do |j|
            ans << board[r+i][c+j]
        end
    end
    return ans
end

def check_grids(board)
    (0...9).step(3).each do |r|
        (0...9).step(3).each do |c|
            return false if !check_9(get_grid(r, c, board))
        end
    end
    return true
end

def is_valid_sudoku(board)
    return check_rows(board) && check_cols(board) && check_grids(board)
end