class Solution {
  public int[][] insert(int[][] intervals, int[] newInterval) {
    int i = 0;
    int len = 0;
    int lb = -1;
    while (i < intervals.length) {
      if (newInterval[1] < intervals[i][0]) {
        lb = i;
        break;
      } else if (newInterval[0] <= intervals[i][1]) {
        lb = i;
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        len++;
        i++;
        while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
          newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
          len++;
          i++;
        }
        break;
      }
      i++;
    }
    if (lb < 0) lb = i;
    int[][] ans = new int[intervals.length - len + 1][2];
    i = 0;
    while (i < lb) {
      ans[i][0] = intervals[i][0];
      ans[i][1] = intervals[i][1];
      i++;
    }
    ans[i][0] = newInterval[0];
    ans[i][1] = newInterval[1];
    i++;
    while (i < ans.length) {
      ans[i][0] = intervals[i + len - 1][0];
      ans[i][1] = intervals[i + len - 1][1];
      i++;
    }
    return ans;
  }
}