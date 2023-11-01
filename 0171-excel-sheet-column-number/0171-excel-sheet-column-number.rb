# @param {String} column_title
# @return {Integer}
def title_to_number(column_title)
  codes = []
  column_title.each_char{ |ch| codes << ch.ord-'A'.ord+1 }
  n = ans = 0
  popped = nil
  while !codes.empty?
    popped = codes.pop
    ans += popped * 26 ** n
    n += 1
  end
  ans
end