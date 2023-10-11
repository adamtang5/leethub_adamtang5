class Solution:
  def largestRectangleArea(self, heights: List[int]) -> int:
    ans = 0
    stack = [
      {
        "i": 0,
        "s": 0,
        "h": heights[0],
      }
    ]
    popped = None
    for i in range(1, len(heights)):
      if heights[i] <= stack[-1]["h"]:
        popped = stack.pop()
        ans = max(ans, (popped["i"]-popped["s"]+1)*popped["h"])
        while stack and stack[-1]["h"] >= heights[i]:
          stack[-1]["i"] = popped["i"]
          popped = stack.pop()
          ans = max(ans, (popped["i"]-popped["s"]+1)*popped["h"])
        stack.append({
          "i": i,
          "s": popped["s"],
          "h": heights[i],
        })
      else:
        stack.append({
          "i": i,
          "s": i,
          "h": heights[i],
        })
    while stack:
      popped = stack.pop()
      ans = max(ans, (popped["i"]-popped["s"]+1)*popped["h"])
      if stack:
        stack[-1]["i"] = popped["i"]
    return ans