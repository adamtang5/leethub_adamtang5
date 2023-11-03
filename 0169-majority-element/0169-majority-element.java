class Solution {
  public int majorityElement(int[] nums) {
    int ans = 0;
    Map<Integer, Integer> tally = new HashMap<Integer, Integer>();
    for (int num : nums) {
      if (!tally.containsKey(num)) {
        tally.put(num, 1);
      } else {
        tally.put(num, tally.get(num) + 1);
      }
    }
    for (Map.Entry<Integer, Integer> entry : tally.entrySet()) {
      if ((double) entry.getValue() >= (double) nums.length / 2.0) {
        ans = entry.getKey();
        break;
      }
    }
    return ans;
  }
}