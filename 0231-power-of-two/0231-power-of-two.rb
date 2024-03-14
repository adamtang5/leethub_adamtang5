# @param {Integer} n
# @return {Boolean}
def is_power_of_two(n)
  while n > 1
    return false if n % 2 > 0
    n /= 2
  end
  n == 1
end