class Solution {
  public int singleNumber(int[] nums) {
    Set<Integer> tally = new HashSet<Integer>();
    for (int num : nums) {
      if (tally.contains(num)) {
        tally.remove(num);
      } else {
        tally.add(num);
      }
    }
    return new ArrayList<Integer>(tally).get(0);
  }
}