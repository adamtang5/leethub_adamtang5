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
      if ((double) tally.get(num) >= (double) nums.length / 2.0) {
        ans = num;
        break;
      }
    }
    return ans;
  }
}