# @param {Integer} n
# @return {Boolean}
def is_power_of_two(n)
  return false if n <= 0
  n & (-n) == n
end