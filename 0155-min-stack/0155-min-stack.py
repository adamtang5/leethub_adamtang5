class Node:
  def __init__(self, val: int):
    self.val, self.min = val, None

class MinStack:
  def __init__(self):
    self.stack = []

  def push(self, val: int) -> None:
    newNode = Node(val)
    if not self.stack or self.getMin() > val:
      newNode.min = val
    else:
      newNode.min = self.getMin()
    self.stack.append(newNode)

  def pop(self) -> None:
    self.stack.pop()

  def top(self) -> int:
    return self.stack[-1].val

  def getMin(self) -> int:
    return self.stack[-1].min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()