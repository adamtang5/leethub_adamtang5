class Solution {
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
  
  public int totalNQueens(int n) {
    List seqs = new ArrayList();
    for (int i = 0; i < n; i++) {
      List starter = Arrays.asList(i);
      dfs(starter, seqs, n);
    }
    return seqs.size();
  }
}