class Solution(object):
  def isNumber(self, s):
    """
    :type s: str
    :rtype: bool
    """
    digitsRe = re.compile("[0-9]")

    def trimSign(s):
      """
      :type s: str
      :rtype: str
      """
      if len(s) > 0 and s[0] in "+-":
        return s[1:]
      else:
        return s
    
    def validNum(s, numType):
      """
      :type s: str
      :type numType: str
      :rtype: bool
      """
      if len(s) == 0:
        return False
      
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
    
    parts = [trimSign(part) for part in s.lower().split("e")]
    if len(parts) == 1:
      return validNum(parts[0], "dec")
    elif len(parts) == 2:
      return validNum(parts[0], "dec") and validNum(parts[1], "int")
    else:
      return False
      