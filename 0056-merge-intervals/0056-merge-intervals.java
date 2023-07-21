class Solution {
  public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, new Comparator<int[]>() {
      public int compare(int[] a, int[] b) {
        return Integer.compare(a[0], b[0]);
      }
    });
    List ansList = new ArrayList();
    int currStart = intervals[0][0];
    int currEnd = intervals[0][1];
    for (int i = 1; i < intervals.length; i++) {
      int newStart = intervals[i][0];
      int newEnd = intervals[i][1];
      if (newStart <= currEnd) {
        currEnd = Math.max(currEnd, newEnd);
      } else {
        int[] interval = new int[2];
        interval[0] = currStart;
        interval[1] = currEnd;
        ansList.add(interval);
        currStart = newStart;
        currEnd = newEnd;
      }
    }
    int[] interval = new int[2];
    interval[0] = currStart;
    interval[1] = currEnd;
    ansList.add(interval);
    int[][] ans = new int[ansList.size()][2];
    for (int i = 0; i < ansList.size(); i++) {
      int[] itv = (int[]) ansList.get(i);
      ans[i][0] = itv[0];
      ans[i][1] = itv[1];
    }
    return ans;
  }
}