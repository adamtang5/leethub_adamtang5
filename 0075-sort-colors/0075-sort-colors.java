class Solution {
  public void sortColors(int[] nums) {
    int[] tally = {0, 0, 0};
    for (int n : nums) {
      tally[n]++;
    }
    
    int n = 0;
    int i = 0;
    while (i < nums.length) {
      if (tally[n] > 0) {
        nums[i] = n;
        tally[n]--;
        i++;
      } else {
        n++;
      }
    }
  }
}