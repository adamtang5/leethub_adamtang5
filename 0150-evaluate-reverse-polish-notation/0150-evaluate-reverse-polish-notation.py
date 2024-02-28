class Solution:
  def evalRPN(self, tokens: List[str]) -> int:
    stack = []
    first = second = result = None
    for token in tokens:
      if token in '+-*/':
        second = stack.pop()
        first = stack.pop()
        if token == '+':
          result = first+second
        elif token == '-':
          result = first-second
        elif token == '*':
          result = first*second
        elif token == '/':
          sign = 1
          if first/second < 0:
            sign = -1
          result = abs(first)//abs(second)*sign
        stack.append(result)
      else:
        stack.append(int(token))
    return stack[0]