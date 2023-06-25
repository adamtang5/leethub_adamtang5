class Solution {
  public int firstMissingPositive(int[] nums) {
    HashSet positives = new HashSet<Integer>();
    for (int n : nums) {
      if (n > 0) positives.add(n);
    }
    int missing = 1;
    while (positives.contains(missing)) missing++;
    return missing;
  }
}