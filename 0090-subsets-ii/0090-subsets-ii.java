class Solution {
  public void dfs(
    int target,
    List<Integer> tallies,
    int total,
    List<List<Integer>> ans,
    List<Integer> keys,
    int idx,
    List<Integer> res
  ) {
    if (target > total) return;
    if (target == 0) {
      ans.add(res);
      return;
    }
    int curr = (int) tallies.get(0);
    tallies.remove(0);
    for (int part = Math.min(curr, target); part >= 0; part--) {
      List<Integer> newRes = new ArrayList<Integer>(res);
      for (int i = 0; i < part; i++) {
        newRes.add((int) keys.get(idx));
      }
      dfs(
        target - part,
        new ArrayList<Integer>(tallies),
        total - curr,
        ans,
        keys,
        idx + 1,
        newRes
      );
    }
  }
  
  public List<List<Integer>> subsetsWithDup(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> tallies = new ArrayList();
    List<Integer> initial = new ArrayList<Integer>();
    initial.add(nums[0]);
    initial.add(1);
    tallies.add(initial);
    for (int i = 1; i < nums.length; i++) {
      int lastFirst = ((List<Integer>) tallies.get(tallies.size() - 1)).get(0);
      if (nums[i] == lastFirst) {
        int lastLast = ((List<Integer>) tallies.get(tallies.size() - 1)).get(1);
        lastLast++;
        ((List<Integer>) tallies.get(tallies.size() - 1)).set(1, lastLast);
      } else {
        List<Integer> newPair = new ArrayList<Integer>();
        newPair.add(nums[i]);
        newPair.add(1);
        tallies.add(newPair);
      }
    }
    List<Integer> keys = new ArrayList<Integer>();
    List<Integer> counts = new ArrayList<Integer>();
    tallies.stream()
      .forEach(pair -> {
        keys.add((int) pair.get(0));
        counts.add((int) pair.get(1));
      });
    List<List<Integer>> ans = new ArrayList();
    
    for (int target = 0; target <= nums.length; target++) {
      dfs(
        target,
        new ArrayList<Integer>(counts),
        nums.length,
        ans,
        keys,
        0,
        new ArrayList<Integer>()
      );
    }
    return ans;
  }
}