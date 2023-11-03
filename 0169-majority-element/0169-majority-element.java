class Solution {
  public int majorityElement(int[] nums) {
    int ans = 1000000001;
    int count = 0;
    for (int num : nums) {
      if (count == 0) {
        ans = num;
        count++;
      } else {
        count = ans == num ? count + 1 : count - 1;
      }
    }
    return ans;
  }
}