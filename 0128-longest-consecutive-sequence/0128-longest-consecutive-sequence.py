class Solution:
  def longestConsecutive(self, nums: List[int]) -> int:
    tally, ans = dict(), 0
    for num in nums:
      if not tally.get(num):
        if (not tally.get(num+1) or tally.get(num+1)['state'] == 'Neighbor') and \
           (not tally.get(num-1) or tally.get(num-1)['state'] == 'Neighbor'):
          tally[num] = {
            'state': 'Present',
            'range': {
              'lb': num,
              'ub': num,
            }
          }
          ans = max(ans, 1)
          tally[num+1] = { 'state': 'Neighbor' }
          tally[num-1] = { 'state': 'Neighbor' }
      elif tally[num] and tally[num]['state'] == 'Neighbor':
        tally[num+1] = tally.get(num+1, { 'state': 'Neighbor' })
        tally[num-1] = tally.get(num-1, { 'state': 'Neighbor' })
        lMin = rMax = num
        if tally[num+1] and tally[num+1]['state'] == 'Present':
          rMax = tally[num+1]['range']['ub']
        if tally[num-1] and tally[num-1]['state'] == 'Present':
          lMin = tally[num-1]['range']['lb']
        newNumberState = {
          'state': 'Present',
          'range': {
            'lb': lMin,
            'ub': rMax,
          }
        }
        tally[num] = tally[lMin] = tally[rMax] = newNumberState
        ans = max(ans, rMax-lMin+1)
    return ans
    