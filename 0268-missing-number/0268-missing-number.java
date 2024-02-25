class Solution {
  public int missingNumber(int[] nums) {
    Set<Integer> numSet = new HashSet<Integer>();
    for (int n : nums) numSet.add(n);
    int ans = -1;
    for (int n = 0; n <= nums.length; n++) {
      if (!numSet.contains(n)) {
        ans = n;
        break;
      }
    }
    return ans;
  }
}