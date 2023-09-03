class Solution:
  def grayCode(self, n: int) -> List[int]:
    def bitSeq(n: int) -> List[int]:
      if n == 1: return [0]*2
      lastSeq = bitSeq(n-1)
      lastSeq[-1] = n-1
      return lastSeq*2
    
    seq = bitSeq(n)
    ans = [0]*(2**n)
    for i in range(len(ans)-1):
      ans[i+1] = ans[i] ^ (1 << (n-1-seq[i]))
    return ans