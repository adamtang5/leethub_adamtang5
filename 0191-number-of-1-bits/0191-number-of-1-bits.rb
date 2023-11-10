# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
  ans = 0
  while n > 0
    ans += 1 if n & 1 > 0
    n /= 2
  end
  ans
end