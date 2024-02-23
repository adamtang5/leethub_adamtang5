# @param {Integer} num
# @return {Integer}
def reduce(n)
  ans = 0
  while n > 0
    ans += n%10
    n /= 10
  end
  ans
end

def add_digits(num)
  num = reduce(num) while num >= 10
  num
end