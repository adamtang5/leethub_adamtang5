class Solution {
  public boolean dfs(int r, int c, char[][] board, String word, int i, Set<String> path) {
    if (i == word.length()) return true;
    String key = String.valueOf(r) + "-" + String.valueOf(c);
    char ch = word.charAt(i);
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || ch != board[r][c] || path.contains(key)) return false;
    path.add(key);
    boolean ans = dfs(r + 1, c, board, word, i + 1, path) ||
      dfs(r - 1, c, board, word, i + 1, path) ||
      dfs(r, c + 1, board, word, i + 1, path) ||
      dfs(r, c - 1, board, word, i + 1, path);
    path.remove(key);
    return ans;
  }
  
  public boolean exist(char[][] board, String word) {
    Map chTally = new HashMap();
    char ch;
    int chCount;
    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c < board[0].length; c++) {
        ch = board[r][c];
        if (chTally.containsKey(ch)) {
          chCount = (int) chTally.get(ch) + 1;
        } else {
          chCount = 1;
        }
        chTally.put(ch, chCount);
      }
    }
    for (int i = 0; i < word.length(); i++) {
      ch = word.charAt(i);
      if (!chTally.containsKey(ch) || (int) chTally.get(ch) <= 0) return false;
      chCount = (int) chTally.get(ch) - 1;
      chTally.put(ch, chCount);
    }
    Set path = new HashSet<String>();
    for (int r = 0; r < board.length; r++) {
      for (int c = 0; c < board[0].length; c++) {
        if (dfs(r, c, board, word, 0, path)) return true;
      }
    }
    return false;
  }
}