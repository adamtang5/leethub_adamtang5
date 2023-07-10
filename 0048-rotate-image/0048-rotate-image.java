class Solution {
  public void reassign(int[][] m, int w, int c) {
    if (w == 1) return;
    int lb = c;
    int ub = c + w - 1;
    int t1;
    int t2;
    int t3;
    for (int i = 0; i < w - 1; i++) {
      t1 = m[lb][lb + i];
      t2 = m[lb + i][ub];
      t3 = m[ub][ub - i];
      m[lb][lb + i] = m[ub - i][lb];
      m[lb + i][ub] = t1;
      m[ub][ub - i] = t2;
      m[ub - i][lb] = t3;
    }
  }
  
  public void rotate(int[][] matrix) {
    int c;
    for (int w = matrix.length; w > 1; w -= 2) {
      c = (int) ((matrix.length - w) / (double) 2);
      reassign(matrix, w, c);
    }
  }
}