class Solution {
  public void setZeroes(int[][] matrix) {
    Set<Integer> rSet = new HashSet<Integer>();
    Set<Integer> cSet = new HashSet<Integer>();
    for (int r = 0; r < matrix.length; r++) {
      for (int c = 0; c < matrix[0].length; c++) {
        if (matrix[r][c] == 0) {
          rSet.add(r);
          cSet.add(c);
        }
      }
    }
    
    for (int r : rSet) {
      for (int c = 0; c < matrix[0].length; c++) {
        matrix[r][c] = 0;
      }
    }
    for (int c : cSet) {
      for (int r = 0; r < matrix.length; r++) {
        matrix[r][c] = 0;
      }
    }
  }
}