class Solution {
  public int getSum(int[] nums) {
    int sum = 0;
    for (int i : nums) {
      sum += i;
    }
    return sum;
  }
  
  public List<List<Integer>> threeSum(int[] nums) {
    if (nums.length == 3) {
      return getSum(nums) == 0 ? Arrays.asList(Arrays.asList(nums[0], nums[1], nums[2])) : Arrays.asList();
    }
    
    List<List<Integer>> ans = new ArrayList<>();
    Arrays.sort(nums);
    int i = 0;
    int l;
    int r;
    while (i < nums.length - 2) {
      l = i + 1;
      r = nums.length - 1;
      while (l < r) {
        if (nums[i] + nums[l] + nums[r] < 0) {
          l++;
        } else if (nums[i] + nums[l] + nums[r] > 0) {
          r--;
        } else {
          List<Integer> combo = Arrays.asList(nums[i], nums[l], nums[r]);
          ans.add(combo);
          while (l < nums.length - 1 && nums[l] == nums[l + 1]) {
            l++;
          }
          if (l < nums.length - 1) {
            l++;
          }
        }
      }
      while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
        i++;
      }
      if (i < nums.length - 1) {
        i++;
      }
    }
    return ans;
  }
}