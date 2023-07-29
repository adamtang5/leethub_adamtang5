import re

class Solution:
  def isNumber(self, s: str) -> bool:
    digitsRe = re.compile("[0-9]")
    
    def validNum(s: str, numType: str) -> bool:
      if len(s) == 0:
        return False
      if s[0] in "+-":
        return validNum(s[1:], numType)
      
      if numType == "dec":
        dotIdx = -1
        for i in range(len(s)):
          if s[i] == ".":
            if dotIdx >= 0 or len(s) == 1:
              return False
            dotIdx = i
          elif re.match(digitsRe, s[i]) is None:
            return False
      elif numType == "int":
        for i in range(len(s)):
          if re.match(digitsRe, s[i]) is None:
            return False
      return True
    
    parts = s.lower().split("e")
    if len(parts) == 1:
      return validNum(parts[0], "dec")
    elif len(parts) == 2:
      return validNum(parts[0], "dec") and validNum(parts[1], "int")
    else:
      return False
      