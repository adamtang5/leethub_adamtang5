class Solution {
  public int fact(int n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
  }
  
  public String dfs(int q, List<String> s, String ans) {
    if (s.size() == 0) return ans;
    
    int subSize = fact(s.size() - 1);
    int subIdx = (int) Math.floor(q / (double) subSize);
    String ext = s.remove(subIdx);
    return dfs(q % subSize, s, ans + ext);
  }
  
  public String getPermutation(int n, int k) {
    List<Integer> sRange = IntStream.range(1, n + 1).boxed().collect(Collectors.toList());
    List<String> seq = sRange.stream()
      .map(d -> String.valueOf(d))
      .collect(Collectors.toList());
    return dfs(k - 1, seq, "");
  }
}