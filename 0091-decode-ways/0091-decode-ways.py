class Solution:
  def numDecodings(self, s: str) -> int:
    def valid(seg: str) -> bool:
      if len(seg) == 1: return seg != '0'
      if len(seg) == 2:
        if seg[0] == '1':
          return True
        elif seg[0] == '2':
          return seg[1] <= '6'
        else:
          return False
      return True

    if len(s) == 1:
      return 1 if valid(s) else 0

    def partition(st: str) -> List[str]:
      ans = []
      curr, lBit, rBit, double, l = st[0], st[0], st[1], st[:2], 0
      while l+1 < len(st):
        if not valid(double):
          ans.append(curr)
          curr = rBit
        elif not valid(rBit):
          curr = curr[:-1]
          if curr:
            ans.append(curr)
          curr = double
        else:
          curr += rBit
        l += 1
        lBit = st[l]
        if l+1 < len(st):
          rBit = st[l+1]
          double = st[l:l+2]
      ans.append(curr)
      return ans

    def fib(n: int) -> int:
      if n < 2: return 1
      l, r = 1, 1
      while n > 1:
        l, r = r, l+r
        n -= 1
      return r

    segments = partition(s)
    if any([not valid(segment) for segment in segments]): return 0
    prod = 1
    for segment in segments:
      if '0' not in segment:
        prod *= fib(len(segment))
    return prod