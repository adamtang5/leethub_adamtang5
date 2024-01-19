class Solution {
  public boolean dfs(String s, Set<String> fails, int minWordLen, int maxWordLen, Map<Integer, Set<String>> lenSets) {
    if (s == "") return true;
    if (fails.contains(s)) return false;
    if (s.length() < minWordLen) {
      fails.add(s);
      return false;
    }
    boolean ans = false;
    for (int len = minWordLen; len <= s.length() && len <= maxWordLen; len++) {
      if (lenSets.containsKey(len)) {
        for (String word : lenSets.get(len)) {
          if (s.startsWith(word)) {
            ans = ans || dfs(s.substring(word.length(), s.length()), fails, minWordLen, maxWordLen, lenSets);
          }
        }
      }
    }
    if (!ans) fails.add(s);
    return ans;
  }
  
  public boolean wordBreak(String s, List<String> wordDict) {
    int maxWordLen = 0;
    int minWordLen = 20;
    Map<Integer, Set<String>> lenSets = new HashMap<Integer, Set<String>>();
    Set<String> fails = new HashSet<String>();
    
    for (String word : wordDict) {
      maxWordLen = Math.max(maxWordLen, word.length());
      minWordLen = Math.min(minWordLen, word.length());
      if (!lenSets.containsKey(word.length())) lenSets.put(word.length(), new HashSet<String>());
      lenSets.get(word.length()).add(word);
    }
    return dfs(s, fails, minWordLen, maxWordLen, lenSets);
  }
}