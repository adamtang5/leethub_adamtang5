class Solution:
  def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    tallies = [[nums[0], 1]]
    for i in range(1, len(nums)):
      if nums[i] == tallies[-1][0]:
        tallies[-1][1] += 1
      else:
        tallies.append([nums[i], 1])

    sortedKeys = [t[0] for t in tallies]
    counts = [t[1] for t in tallies]
    
    ans = []
    def dfs(target, tallies, total, idx=0, res=[]):
      if target == 0:
        ans.append(res)
        return
      if target > total:
        return
      curr = tallies.pop(0)
      for part in range(min(curr, target), -1, -1):
        dfs(target-part, tallies.copy(), total-curr, idx+1, res + ([sortedKeys[idx]] * part))
    
    for target in range(len(nums)+1):
      dfs(target, counts.copy(), len(nums))
      
    return ans