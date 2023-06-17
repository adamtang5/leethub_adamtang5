class Solution {
  public boolean check9(List<String> arr) {
    List<String> f = arr.stream()
      .filter(cell -> !cell.equals("."))
      .collect(Collectors.toList());
    Collections.sort(f);
    
    for (int i = 1; i < f.size(); i++) {
      if (f.get(i - 1).equals(f.get(i))) return false;
    }
    return true;
  }
  
  public boolean checkRows(char[][] board) {
    for (int i = 0; i < 9; i++) {
      String s = String.valueOf(board[i]);
      List<String> row = Arrays.asList(s.split(""));
      if (!check9(row)) return false;
    }
    return true;
  }
  
  public boolean checkCols(char[][] board) {
    for (int i = 0; i < 9; i++) {
      String s = "";
      for (int j = 0; j < 9; j++) {
        s += String.valueOf(board[j][i]);
      }
      List<String> col = Arrays.asList(s.split(""));
      if (!check9(col)) return false;
    }
    return true;
  }
  
  public List<String> getGrid(char[][] board, int row, int col) {
    List<String> ans = new ArrayList<String>();
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        ans.add(String.valueOf(board[row + i][col + j]));
      }
    }
    return ans;
  }
    
  public boolean checkGrids(char[][] board) {
    for (int row = 0; row < 9; row += 3) {
      for (int col = 0; col < 9; col += 3) {
        if (!check9(getGrid(board, row, col))) return false;
      }
    }
    return true;
  }
  
  public boolean isValidSudoku(char[][] board) {
    return checkRows(board) && checkCols(board) && checkGrids(board);
  }
}