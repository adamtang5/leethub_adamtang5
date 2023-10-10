# @param {Integer} row_index
# @return {Integer[]}
def get_row(row_index)
  return [1] if row_index == 0
  ans = []
  prev_row = get_row(row_index-1)
  l = r = nil
  (0..prev_row.length).each do |i|
    l = i == 0 ? 0 : prev_row[i-1]
    r = i == prev_row.length ? 0 : prev_row[i]
    ans << l+r
  end
  ans
end