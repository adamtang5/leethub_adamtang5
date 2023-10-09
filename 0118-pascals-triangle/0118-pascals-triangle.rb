# @param {Integer} num_rows
# @return {Integer[][]}
def generate(num_rows)
  return [[1]] if num_rows == 1
  ans = [[1], [1, 1]]
  while num_rows > 2
    prev = ans[-1]
    next_row = [1]
    (1...prev.length).each { |i| next_row << prev[i-1]+prev[i] }
    next_row << 1
    ans << next_row
    num_rows -= 1
  end
  ans
end