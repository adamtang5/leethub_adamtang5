class Solution:
  def restoreIpAddresses(self, s: str) -> List[str]:
    ans = []
    if len(s) not in range(4, 13):
      return ans
    if len(s) == 4:
      ans.append(".".join(list(s)))
      return ans
    
    def validOctet(s):
      if len(s) not in range(1, 4):
        return False
      if len(s) > 1 and s[0] == '0':
        return False
      if int(s) > 255:
        return False
      return True
    
    def dfs(s, octIdx=3, addr=''):
      if s == '':
        return
      if len(s) > (octIdx+1)*3:
        return
      if not octIdx and not validOctet(s):
        return
      if validOctet(s) and not octIdx:
        ans.append(s+addr)
        return
      
      for digits in range(1, min(len(s), 3)+1):
        oct = s[-digits:]
        if validOctet(oct):
          dfs(s[0:-digits], octIdx-1, f'.{oct}{addr}')
          
    dfs(s)
    return ans