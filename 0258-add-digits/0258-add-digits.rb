# @param {Integer} num
# @return {Integer}
def add_digits(num)
  return 0 if num == 0
  num %= 9
  return 9 if num == 0
  num
end