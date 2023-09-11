class Solution {
  public boolean isInterleave(String s1, String s2, String s3) {
    int[][] dp = new int[s1.length() + 1][s2.length() + 1];
    for (int[] row : dp) {
      for (int j = 0; j < row.length; j++) {
        row[j] = 0;
      }
    }

    List<List<Integer>> queue = new ArrayList();
    List<Integer> starter = new ArrayList<Integer>();
    starter.add(0);
    starter.add(0);
    queue.add(starter);
    
    while (!queue.isEmpty()) {
      List<Integer> firstPair = queue.remove(0);
      int x = (int) firstPair.get(0);
      int y = (int) firstPair.get(1);
      
      if (x + y == s3.length()) break;
      if (x < s1.length() && s3.charAt(x + y) == s1.charAt(x) && dp[x + 1][y] == 0) {
        dp[x + 1][y] = x + y + 1;
        List<Integer> newPair = new ArrayList<Integer>();
        newPair.add(x + 1);
        newPair.add(y);
        queue.add(newPair);
      }
      if (y < s2.length() && s3.charAt(x + y) == s2.charAt(y) && dp[x][y + 1] == 0) {
        dp[x][y + 1] = x + y + 1;
        List<Integer> newPair = new ArrayList<Integer>();
        newPair.add(x);
        newPair.add(y + 1);
        queue.add(newPair);
      }
    }
    
    return dp[s1.length()][s2.length()] == s3.length();
  }
}