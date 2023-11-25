class Solution {
  public int longestConsecutive(int[] nums) {
    Set<Integer> edge = new HashSet<Integer>();
    Map<Integer, Map<String, Integer>> occurred = new HashMap();
    int ans = 0;
    for (int num : nums) {
      if (!edge.contains(num) && !occurred.containsKey(num)) {
        if (!occurred.containsKey(num + 1) && !occurred.containsKey(num + 1)) {
          Map<String, Integer> newState = new HashMap();
          newState.put("lb", num);
          newState.put("ub", num);
          occurred.put(num, newState);
          ans = Math.max(ans, 1);
          edge.add(num + 1);
          edge.add(num - 1);
        }
      } else if (edge.contains(num)) {
        if (!occurred.containsKey(num + 1)) edge.add(num + 1);
        if (!occurred.containsKey(num - 1)) edge.add(num - 1);
        int lMin = num;
        int rMax = num;
        if (occurred.containsKey(num + 1)) rMax = occurred.get(num + 1).get("ub");
        if (occurred.containsKey(num - 1)) lMin = occurred.get(num - 1).get("lb");
        Map<String, Integer> newState = new HashMap();
        newState.put("lb", lMin);
        newState.put("ub", rMax);
        occurred.put(num, newState);
        occurred.put(lMin, newState);
        occurred.put(rMax, newState);
        edge.remove(num);
        ans = Math.max(ans, rMax - lMin + 1);
      }
    }
    return ans;
  }
}