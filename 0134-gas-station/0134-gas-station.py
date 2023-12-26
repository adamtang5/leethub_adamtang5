class Solution:
  def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
    if sum(gas)-sum(cost) < 0: return -1
    
    total = ans = 0
    for i in range(len(gas)):
      total += gas[i]-cost[i]
      if total < 0:
        total = 0
        ans = i+1
    return ans