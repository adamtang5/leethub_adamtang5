import re

class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    def charMatch(ch1: str, ch2: str) -> bool:
      return ch2 == '?' or ch2 == ch1
    
    def parse(s: str, chunks: list) -> bool:
      print(s, chunks)
      if chunks == []: return True
      start = cIdx = 0
      j = 1
      while cIdx < len(chunks) and start < len(s):
        while start < len(s) and not charMatch(s[start], chunks[cIdx][0]):
          start += 1
        if start == len(s):
          break
        j = 1
        while j < len(chunks[cIdx]) and start+j < len(s) and charMatch(s[start+j], chunks[cIdx][j]):
          j += 1
        if j == len(chunks[cIdx]):
          cIdx += 1
          start += j
        else:
          start += 1
      return cIdx == len(chunks)
      
    if p == '': return s == ''
    p = re.sub(r"\*+", '*', p)
    i = 0
    if p[i] != '*':
      while i < len(p) and p[i] != '*':
        if i >= len(s): return False
        if not charMatch(s[i], p[i]): return False
        i += 1
      s = s[i:]
      p = p[i:]
    if p == '': return s == ''
    i = 0
    if p[-1-i] != '*':
      while i < len(p) and p[-1-i] != '*':
        if i >= len(s): return False
        if not charMatch(s[-1-i], p[-1-i]): return False
        i += 1
      s = s[:-i]
      p = p[:-i]
    if p == '*': return True
    return parse(s, p[1:-1].split('*'))