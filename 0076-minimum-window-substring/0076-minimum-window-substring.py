from collections import defaultdict

class Solution:
  def minWindow(self, s: str, t: str) -> str:
    tally, window = defaultdict(int), defaultdict(int)
    for c in t:
      tally[c] += 1
    
    have, need, lb, ub, l = 0, len(tally), -1, len(s)+1, 0
    
    for r in range(len(s)):
      if s[r] in tally:
        window[s[r]] += 1
        
        if window[s[r]] == tally[s[r]]:
          have += 1
          
        while have == need:
          if r+1-l < ub-lb:
            lb, ub = l, r+1
          if s[l] in tally:
            window[s[l]] -= 1
            if window[s[l]] < tally[s[l]]:
              have -= 1
          l += 1
    return "" if lb < 0 else s[lb:ub]