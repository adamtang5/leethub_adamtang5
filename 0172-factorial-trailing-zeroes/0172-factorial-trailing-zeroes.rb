# @param {Integer} n
# @return {Integer}
def trailing_zeroes(n)
  powers, b = [], 5
  while b <= 10000
    powers << b
    b *= 5
  end
  powers.sum{ |base| n/base }
end