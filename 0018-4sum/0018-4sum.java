class Solution {
  public List<List<Integer>> fourSum(int[] nums, int target) {
    Arrays.sort(nums);
    Set<String> ansSet = new HashSet<String>();
    int i = 0;
    int j, l, r;
    double currSum;
    
    while (i < nums.length - 3) {
      j = i + 1;
      while (j < nums.length - 2) {
        l = j + 1;
        r = nums.length - 1;
        while (l < r) {
          currSum = (double) nums[i] + nums[j] + nums[l] + nums[r];
          if (currSum == target) {
            List <String> list = Arrays.asList(String.valueOf(nums[i]), String.valueOf(nums[j]), String.valueOf(nums[l]), String.valueOf(nums[r]));
            ansSet.add(String.join(",", list));
          }
          if (currSum <= target) {
            l++;
          } else {
            r--;
          }
        }
        while (nums[j + 1] == nums[j] && j < nums.length - 2) {
          j++;
        }
        j++;
      }
      while (nums[i + 1] == nums[i] && i < nums.length - 3) {
        i++;
      }
      i++;
    }
    ArrayList<String> ansArray = new ArrayList<>(ansSet);
    
    List<List<Integer>> ansList = new ArrayList<>();
    for (String s : ansArray) {
      List<String> combos = Arrays.asList(s.split(","));
      ansList.add(combos.stream()
                 .map(numStr -> Integer.parseInt(numStr))
                 .collect(Collectors.toList()));
    }
    return ansList;
  }
}