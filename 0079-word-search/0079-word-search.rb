# @param {Character[][]} board
# @param {String} word
# @return {Boolean}
def dfs(r, c, board, word, i, path)
  return true if i == word.length
  return false if r < 0 || r >= board.length || c < 0 || c >= board[0].length || word[i] != board[r][c] || path.include?([r, c])
  path.add([r, c])
  res = dfs(r+1, c, board, word, i+1, path) || dfs(r-1, c, board, word, i+1, path) || dfs(r, c+1, board, word, i+1, path) || dfs(r, c-1, board, word, i+1, path)
  path.delete([r, c])
  res
end

def exist(board, word)
  ch_tally = Hash.new(0)
  (0...board.length).each do |r|
    (0...board[0].length).each { |c| ch_tally[board[r][c]] += 1 }
  end
  word.each_char do |ch|
    return false if ch_tally[ch] <= 0
    ch_tally[ch] -= 1
  end

  path = Set.new
  (0...board.length).each do |r|
    (0...board[0].length).each do |c|
      return true if dfs(r, c, board, word, 0, path)
    end
  end
  false
end