class Solution {
  public boolean containsNearbyDuplicate(int[] nums, int k) {
    if (k == 0) return false;
    Map<Integer, Integer> window = new HashMap<Integer, Integer>();
    for (int i = 0; i < k && i < nums.length; i++) {
      if (!window.containsKey(nums[i])) window.put(nums[i], 0);
      window.put(nums[i], window.get(nums[i]) + 1);
      if (window.get(nums[i]) > 1) return true;
    }
    for (int i = k; i < nums.length; i++) {
      if (window.containsKey(nums[i])) return true;
      if (window.get(nums[i - k]) == 1) {
        window.remove(nums[i - k]);
      } else {
        window.put(nums[i - k], window.get(nums[i - k]) - 1);
      }
      if (!window.containsKey(nums[i])) window.put(nums[i], 0);
      window.put(nums[i], window.get(nums[i]) + 1);
    }
    return false;
  }
}