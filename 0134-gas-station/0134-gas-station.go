func canCompleteCircuit(gas []int, cost []int) int {
  diff := 0
  for _, el := range gas {
    diff += el
  }
  for _, el := range cost {
    diff -= el
  }
  if diff < 0 {
    return -1
  }

  total, ans := 0, 0
  for i := 0; i < len(gas); i++ {
    total += gas[i] - cost[i]
    if total < 0 {
      total = 0
      ans = i + 1
    }
  }
  return ans
}