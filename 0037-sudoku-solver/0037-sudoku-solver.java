class Solution {
  public boolean solved = false;
  public HashSet<?>[] rows = new HashSet<?>[9];
  public HashSet<?>[] cols = new HashSet<?>[9];
  public HashSet<?>[] subs = new HashSet<?>[9];
  
  public void backtrack(int r, int c, char[][] board) {
    if (r == 9) {
      solved = true;
      return;
    }
    
    int nextR = r + (int) Math.floor((c + 1) / (double) 9);
    int nextC = (c + 1) % 9;
    
    char cell = board[r][c];
    if (cell != '.') {
      backtrack(nextR, nextC, board);
    } else {
      for (int d = 1; d <= 9; d++) {
        int subIdx = 3 * (int) Math.floor(r / (double) 3) + (int) Math.floor(c / (double) 3);
        Set rowSet = (HashSet<Integer>) rows[r];
        Set colSet = (HashSet<Integer>) cols[c];
        Set subSet = (HashSet<Integer>) subs[subIdx];
        if (!(rowSet.contains(d) || colSet.contains(d) || subSet.contains(d))) {
          rowSet.add(d);
          colSet.add(d);
          subSet.add(d);
          board[r][c] = (char) (d + '0');
          
          backtrack(nextR, nextC, board);
          
          if (!solved) {
            rowSet.remove(d);
            colSet.remove(d);
            subSet.remove(d);
            board[r][c] = '.';
          }
        }
      }
    }
  }
  
  public void solveSudoku(char[][] board) {
    for (int i = 0; i < 9; i++) {
      rows[i] = new HashSet<Integer>();
      cols[i] = new HashSet<Integer>();
      subs[i] = new HashSet<Integer>();
    }
    for (int r = 0; r < 9; r++) {
      for (int c = 0; c < 9; c++) {
        char cell = board[r][c];
        if (cell != '.') {
          int d = cell - '0';
          int subIdx = 3 * (int) Math.floor(r / (double) 3) + (int) Math.floor(c / (double) 3);
          ((HashSet<Integer>) rows[r]).add(d);
          ((HashSet<Integer>) cols[c]).add(d);
          ((HashSet<Integer>) subs[subIdx]).add(d);
        }
      }
    }

    backtrack(0, 0, board);
  }
}