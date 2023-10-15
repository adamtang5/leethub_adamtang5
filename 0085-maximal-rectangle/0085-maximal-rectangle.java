class Solution {
  public int maximalRectangle(char[][] matrix) {
    int[][] h = new int[matrix.length][matrix[0].length];
    int[][] v = new int[matrix.length][matrix[0].length];
    for (int r = 0; r < matrix.length; r++) {
      for (int c = 0; c < matrix[0].length; c++) {
        h[r][c] = Integer.valueOf(String.valueOf(matrix[r][c]));
        v[r][c] = Integer.valueOf(String.valueOf(matrix[r][c]));
      }
    }
    for (int r = 0; r < matrix.length; r++) {
      for (int c = matrix[0].length - 2; c >= 0; c--) {
        if (h[r][c] > 0) h[r][c] = h[r][c + 1] + 1;
      }
    }
    for (int c = 0; c < matrix[0].length; c++) {
      for (int r = matrix.length - 2; r >= 0; r--) {
        if (v[r][c] > 0) v[r][c] = v[r + 1][c] + 1;
      }
    }
    int ans = 0;
    int ht;
    int wd;
    Set<Integer> thSet = new HashSet<Integer>();
    for (int r = 0; r < matrix.length; r++) {
      for (int c = 0; c < matrix[0].length; c++) {
        thSet.clear();
        if (h[r][c] > 0 && v[r][c] > 0) {
          for (int j = 0; j < h[r][c]; j++) thSet.add(v[r][c + j]);
          for (int th : thSet) {
            wd = 0;
            while (wd < h[r][c] && v[r][c + wd] >= th) wd++;
            ans = Math.max(ans, wd * th);
          }
          thSet.clear();
          for (int i = 0; i < v[r][c]; i++) thSet.add(h[r + i][c]);
          for (int th : thSet) {
            ht = 0;
            while (ht < v[r][c] && h[r + ht][c] >= th) ht++;
            ans = Math.max(ans, ht * th);
          }
          thSet.clear();
        }
      }
    }
    return ans;
  }
}