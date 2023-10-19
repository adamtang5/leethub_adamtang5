class Solution {
  public int numDistinct(String s, String t) {
    Set<Character> tChars = new HashSet();
    for (int i = 0; i < t.length(); i++) tChars.add(t.charAt(i));
    String newS = "";
    for (int i = 0; i < s.length(); i++) {
      if (tChars.contains(s.charAt(i))) newS += s.substring(i, i + 1);
    }
    if (newS.length() == 0) return 0;
    
    int left = 0;
    int right = newS.length();
    while (left < newS.length() && newS.charAt(left) != t.charAt(0)) left++;
    while (right > 0 && newS.charAt(right - 1) != t.charAt(t.length() - 1)) right--;
    if (right < left) return 0;
    s = newS.substring(left, right);
    if (s.length() == 0) return 0;
    if (s.equals(t)) return 1;
    
    int[][] dp = new int[s.length()][t.length()];
    for (int i = 0; i < s.length(); i++) {
      for (int j = 0; j < t.length(); j++) {
        dp[i][j] = 0;
      }
    }
    for (int l = 0; l < s.length(); l++) {
      if (s.charAt(l) == t.charAt(0)) dp[l][0]++;
    }
    for (int r = 0; r < t.length() - 1; r++) {
      for (int l = r; l < s.length(); l++) {
        if (dp[l][r] > 0) {
          for (int i = l + 1; i < s.length(); i++) {
            if (s.charAt(i) == t.charAt(r + 1)) dp[i][r + 1] += dp[l][r];
          }
        }
      }
    }
    
    return Arrays.stream(dp)
      .map(row -> row[t.length() - 1])
      .reduce(0, Integer::sum);
  }
}