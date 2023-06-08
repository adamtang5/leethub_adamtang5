from collections import defaultdict

class Solution:
  def findSubstring(self, s: str, words: List[str]) -> List[int]:
    ans = []
    tally = defaultdict(int)
    for word in words:
      tally[word] += 1
    start, currWord, j = 0, '', 0

    for offset in range(len(words[0])):
      start = offset
      copy = dict(tally)
      currWords = []
      for i in range(offset, len(s)-len(words[0])+1, len(words[0])):
        currWord = ''
        j = 0
        while j < len(words[0]):
          currWord += s[i+j]
          j += 1
        start = max(i+j-len(words)*len(words[0]), start)
        currWords.append(currWord)
        if len(currWords)-len(words)-1 >= 0:
          popped = currWords[len(currWords)-len(words)-1]
          if popped in copy:
            copy[popped] += 1
        if currWord in copy:
          copy[currWord] -= 1
          if all([val == 0 for val in copy.values()]):
            ans.append(start)
    return ans