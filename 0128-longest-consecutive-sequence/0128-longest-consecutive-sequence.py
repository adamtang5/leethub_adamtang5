class Solution:
  def longestConsecutive(self, nums: List[int]) -> int:
    edge, occurred, ans = set(), dict(), 0
    for num in nums:
      if num not in edge and not occurred.get(num):
        if not occurred.get(num+1) and not occurred.get(num-1):
          occurred[num] = {
            'lb': num,
            'ub': num,
          }
          ans = max(ans, 1)
          edge.add(num+1)
          edge.add(num-1)
      elif num in edge:
        if not occurred.get(num+1):
          edge.add(num+1)
        if not occurred.get(num-1):
          edge.add(num-1)
        lMin = rMax = num
        if occurred.get(num+1):
          rMax = occurred[num+1]['ub']
        if occurred.get(num-1):
          lMin = occurred[num-1]['lb']
        newState = {
          'lb': lMin,
          'ub': rMax,
        }
        occurred[num] = occurred[lMin] = occurred[rMax] = newState
        edge.remove(num)
        ans = max(ans, rMax-lMin+1)
    return ans
    