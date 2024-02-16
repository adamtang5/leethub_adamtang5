POWERS, p = [0], 1
while p <= 2147483647:
  POWERS.append(p)
  p *= 2

class Solution:
  def rangeBitwiseAnd(self, left: int, right: int) -> int:
    if left == 0: return 0
    lIdx, rIdx, i = -1, -1, 0
    while i < len(POWERS):
      if left >= POWERS[i]:
        lIdx += 1
      if right >= POWERS[i]:
        rIdx += 1
      i += 1
    if lIdx != rIdx: return 0
    return POWERS[lIdx]+self.rangeBitwiseAnd(left-POWERS[lIdx], right-POWERS[lIdx])