class Solution:
  def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
    def leftJustify(words: List[str], maxWidth: int) -> str:
      ans = " ".join(words)
      tail = " "*(maxWidth-len(ans))
      ans += tail
      return ans
    
    def justifyLine(words: List[str], maxWidth: int) -> str:
      if len(words) == 1:
        return leftJustify(words, maxWidth)
      wordsLen = sum(len(word) for word in words)
      spaces = maxWidth-wordsLen
      ans = ""
      for i in range(len(words)-1):
        ans += words[i]
        base = spaces//(len(words)-1)
        leftover = 1 if i < spaces%(len(words)-1) else 0
        ans += " "*(base+leftover)
      ans += words[-1]
      return ans
    
    lines = []
    l = r = 0
    minWidth = len(words[0])
    while (l < len(words)):
      if minWidth == maxWidth:
        lines.append(" ".join(words[l:r+1]))
        l = r+1
        r = l
        minWidth = len(words[l]) if l < len(words) else 0
      elif minWidth > maxWidth:
        minWidth -= len(words[r])
        minWidth -= 1
        r -= 1
        lines.append(justifyLine(words[l:r+1], maxWidth))
        l = r+1
        r = l
        minWidth = len(words[l]) if l < len(words) else 0
      else:
        r += 1
        if r < len(words):
          minWidth += len(words[r])
          minWidth += 1
        else:
          lines.append(leftJustify(words[l:], maxWidth))
          break
    return lines