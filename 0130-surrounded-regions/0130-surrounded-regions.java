class Solution {
  public boolean isEdge(int r, int c, char[][] board) {
    return r == 0 || r == board.length - 1 || c == 0 || c == board[0].length - 1;
  }
  
  public boolean inbound(int r, int c, char[][] board) {
    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;
  }
  
  public void solve(char[][] board) {
    int[][] dirs = new int[4][2];
    dirs[0][0] = 0;
    dirs[0][1] = 1;
    dirs[1][0] = 1;
    dirs[1][1] = 0;
    dirs[2][0] = 0;
    dirs[2][1] = -1;
    dirs[3][0] = -1;
    dirs[3][1] = 0;

    List<List<Integer>> edgeIsland = new ArrayList();
    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c < board[0].length; c++) {
        if (isEdge(r, c, board) && board[r][c] == 'O') {
          List<Integer> next = Arrays.asList(r, c);
          edgeIsland.add(next);
        }
      }
    }
    
    Set<String> visited = new HashSet<String>();
    for (List<Integer> curr : edgeIsland) {
      int r = curr.get(0);
      int c = curr.get(1);
      visited.add(String.valueOf(r) + "-" + String.valueOf(c));
      List<List<Integer>> queue = new ArrayList();
      queue.add(curr);
      while (!queue.isEmpty()) {
        List<Integer> first = queue.remove(0);
        int currR = first.get(0);
        int currC = first.get(1);
        for (int i = 0; i < dirs.length; i++) {
          int rowD = dirs[i][0];
          int colD = dirs[i][1];
          int newR = currR + rowD;
          int newC = currC + colD;
          String key = String.valueOf(newR) + "-" + String.valueOf(newC);
          if (inbound(newR, newC, board) && !visited.contains(key) && board[newR][newC] == 'O') {
            queue.add(Arrays.asList(newR, newC));
            visited.add(key);
          }
        }
      }
    }
    
    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c < board[0].length; c++) {
        if (!isEdge(r, c, board) && !visited.contains(String.valueOf(r) + "-" + String.valueOf(c))) {
          board[r][c] = 'X';
        }
      }
    }
  }
}