class Solution {
  public int canCompleteCircuit(int[] gas, int[] cost) {
    int diff = IntStream.of(gas).sum() - IntStream.of(cost).sum();
    if (diff < 0) return -1;
    
    int total = 0;
    int ans = 0;
    for (int i = 0; i < gas.length; i++) {
      total += gas[i] - cost[i];
      if (total < 0) {
        total = 0;
        ans = i + 1;
      }
    }
    return ans;
  }
}