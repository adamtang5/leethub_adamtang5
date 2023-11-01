class Solution {
  public int maxProduct(int[] nums) {
    int ans = Arrays.stream(nums).max().getAsInt();
    int currMin = 1;
    int currMax = 1;
    int temp;
    for (int num : nums) {
      temp = currMax;
      currMax = Collections.max(Arrays.asList(currMin * num, temp * num, num));
      currMin = Collections.min(Arrays.asList(currMin * num, temp * num, num));
      ans = Collections.max(Arrays.asList(currMax, currMin, ans));
    }
    return ans;
  }
}