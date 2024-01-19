# @param {Integer} n
# @return {Boolean}
def reduce(num)
  ans = d = 0
  while num > 0
    d = num%10
    ans += d*d
    num /= 10
  end
  ans
end

def is_happy(n)
  7.times do
    n = reduce(n)
    return true if n == 1
  end
  n == 1
end