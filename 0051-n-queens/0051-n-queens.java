class Solution {
  public List<String> buildBoard(List<Integer> coords) {
    String[][] board = new String[coords.size()][coords.size()];
    for (int r = 0; r < coords.size(); r++) {
      for (int c = 0; c < coords.size(); c++) {
        board[r][c] = ".";
      }
    }
    for (int r = 0; r < coords.size(); r++) {
      int c = coords.get(r);
      board[r][c] = "Q";
    }
    List ans = new ArrayList<String>();
    for (int r = 0; r < coords.size(); r++) {
      StringBuffer sb = new StringBuffer();
      for (int c = 0; c < coords.size(); c++) {
        sb.append(board[r][c]);
      }
      ans.add(sb.toString());
    }
    return ans;
  }
  
  public boolean inBound(int c, int n) {
    return c >= 0 && c < n;
  }
  
  public void dfs(List<Integer> seq, List<List<Integer>> seqs, int n) {
    if (seq.size() == n) {
      seqs.add(seq);
      return;
    }
    Set redSet = new HashSet<Integer>(seq);
    for (int r = 0; r < seq.size(); r++) {
      int c = seq.get(r);
      if (inBound(c + seq.size() - r, n)) redSet.add(c + seq.size() - r);
      if (inBound(c - seq.size() + r, n)) redSet.add(c - seq.size() + r);
    }
    for (int i = 0; i < n; i++) {
      List newSeq = new ArrayList<Integer>();
      newSeq.addAll(seq);
      newSeq.add(i);
      if (!redSet.contains(i)) dfs(newSeq, seqs, n);
    }
  }
  
  public List<List<String>> solveNQueens(int n) {
    List seqs = new ArrayList();
    for (int i = 0; i < n; i++) {
      List starter = Arrays.asList(i);
      dfs(starter, seqs, n);
    }
    List ans = new ArrayList();
    for (int i = 0; i < seqs.size(); i++) {
      List<Integer> seq = (List<Integer>) seqs.get(i);
      ans.add(buildBoard(seq));
    }
    return ans;
  }
}