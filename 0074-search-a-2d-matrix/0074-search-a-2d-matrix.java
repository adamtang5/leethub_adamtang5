class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {
    int r = 0;
    while (r < matrix.length - 1) {
      if (target >= matrix[r + 1][0]) {
        r++;
      } else {
        break;
      }
    }
    if (r == matrix.length) return false;
    for (int c = 0; c < matrix[r].length; c++) {
      if (target == matrix[r][c]) {
        return true;
      } else if (target < matrix[r][c]) {
        return false;
      }
    }
    return false;
  }
}