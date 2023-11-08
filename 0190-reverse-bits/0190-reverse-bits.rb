# @param {Integer} n, a positive integer
# @return {Integer}
def reverse_bits(n)
  rev_str = n.to_s(2)
  rev_str.reverse!
  right = '0'*(32-rev_str.length)
  (rev_str+right).to_i(2)
end