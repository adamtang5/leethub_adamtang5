# @param {Integer} n
# @return {Boolean}
def is_ugly(n)
  return false if n <= 0
  return true if n < 7
  [2, 3, 5].each do |f|
    n /= f while n%f == 0
  end
  n == 1
end