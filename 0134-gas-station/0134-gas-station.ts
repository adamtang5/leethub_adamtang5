function canCompleteCircuit(gas: number[], cost: number[]): number {
  const diff: number = gas.reduce((sum, n) => sum + n, 0) - cost.reduce((sum, n) => sum + n, 0)
  if (diff < 0) return -1
  
  let total = 0
  let ans = 0
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i]
    if (total < 0) {
      total = 0
      ans = i + 1
    }
  }
  return ans
}