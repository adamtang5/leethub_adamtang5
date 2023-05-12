import math

class Solution:
  def intToRoman(self, num: int) -> str:
    lookup = [
      {
        1: 'I',
        5: 'V',
      },
      {
        1: 'X',
        5: 'L',
      },
      {
        1: 'C',
        5: 'D',
      },
      {
        1: 'M',
      },
    ]

    def digit2Roman(val, p):
      ans = ''
      match val%5:
        case 4:
          if val > 5:
            ans += lookup[pow][1]+lookup[pow+1][1]
          else:
            ans += lookup[pow][1]+lookup[pow][5]
        case _:
          if val >= 5:
            ans += lookup[pow][5]
          ans += lookup[pow][1]*(val%5)
      return ans
    
    digits = []
    while num > 0:
      digits.append(num%10)
      num = num//10
    ans = ''
    for pow, digit in enumerate(digits):
      ans = digit2Roman(digit, pow) + ans
    return ans