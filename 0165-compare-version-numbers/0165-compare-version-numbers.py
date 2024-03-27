class Solution:
  def compareVersion(self, version1: str, version2: str) -> int:
    subs1 = [int(d) for d in version1.split(".")]
    subs2 = [int(d) for d in version2.split(".")]
    i = 0
    while i < len(subs1) and i < len(subs2):
      if subs1[i] < subs2[i]: return -1
      if subs1[i] > subs2[i]: return 1
      i += 1
    while i < len(subs1):
      if subs1[i] > 0: return 1
      i += 1
    while i < len(subs2):
      if subs2[i] > 0: return -1
      i += 1
    return 0