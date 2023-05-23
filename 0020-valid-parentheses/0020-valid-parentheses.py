class Solution:
  def isValid(self, s: str) -> bool:
    stack = []
    open = {
      ')': '(',
      ']': '[',
      '}': '{',
    }
    for p in s:
      if p in '([{':
        stack.append(p)
      elif len(stack) == 0 or stack.pop(-1) != open[p]:
        return False
    return not len(stack)