class Node:
  def __init__(self, val: str, prev: int):
    self.val, self.prev = val, prev

class Solution:
  def fractionToDecimal(self, numerator: int, denominator: int) -> str:
    pre = post = ""
    num, denom, prev, dp = abs(numerator), abs(denominator), None, dict()
    d = num//denom
    pre = str(d)
    num -= d*denom
    while num != 0:
      num *= 10
      if num in dp:
        if prev is not None:
          post = dp[prev].val
        i, curr = 1, prev
        while curr != num:
          curr = dp[curr].prev
          i += 1
        first, second = post[0:-i], post[-i:]
        post = f"{first}({second})"
        if numerator == 0 or numerator > 0 and denominator > 0 or numerator < 0 and denominator < 0:
          return f"{pre}.{post}"
        else:
          return f"-{pre}.{post}"
      d = num//denom
      post += str(d)
      if num not in dp:
        dp[num] = Node(
          dp[prev].val + str(d) if prev is not None else str(d),
          prev
        )
      prev = num
      num -= d*denom
    ans = pre + ("."+post if post != "" else "")
    if numerator == 0 or numerator > 0 and denominator > 0 or numerator < 0 and denominator < 0:
      return ans
    else:
      return f"-{ans}"