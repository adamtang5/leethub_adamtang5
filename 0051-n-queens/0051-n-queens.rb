# @param {Integer} n
# @return {String[][]}
def build_board(coords)
  ans = Array.new(coords.length) { Array.new(coords.length, '.') }
  coords.each_with_index{ |c, r| ans[r][c] = 'Q' }
  ans.map{ |row| row.join('') }
end

def in_bound(c, n)
  c >= 0 && c < n
end

def dfs(seq, seqs, n)
  if seq.length == n
    seqs << seq
    return
  end
  red_set = seq.to_set
  seq.each_with_index do |c, r|
    red_set.add(c+seq.length-r) if in_bound(c+seq.length-r, n)
    red_set.add(c-seq.length+r) if in_bound(c-seq.length+r, n)
  end
  (0...n).each{ |i| dfs(seq+[i], seqs, n) if !red_set.include?(i) }
  nil
end

def solve_n_queens(n)
  seqs = []
  (0...n).each{ |i| dfs([i], seqs, n) }
  seqs.map{ |seq| build_board(seq) }
end