class Solution:
  def wordPattern(self, pattern: str, s: str) -> bool:
    words = s.split(' ')
    if len(pattern) != len(words): return False
    fw, bw = dict(), dict()
    for i in range(len(pattern)):
      if pattern[i] not in fw and words[i] not in bw:
        fw[pattern[i]] = words[i]
        bw[words[i]] = pattern[i]
      elif pattern[i] in fw and words[i] not in bw:
        return False
      elif words[i] in bw and pattern[i] not in fw:
        return False
      elif fw[pattern[i]] != words[i] or bw[words[i]] != pattern[i]:
        return False
    return True