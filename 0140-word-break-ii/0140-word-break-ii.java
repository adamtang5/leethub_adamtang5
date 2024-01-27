class Solution {
  public void build(int curr, List<String> currWords, String s, List<String> ans, Map<Integer, Set<Integer>> parents) {
    if (curr == 0) {
      ans.add(String.join(" ", currWords));
      return;
    }
    if (!parents.containsKey(curr)) return;
    for (int parent : parents.get(curr)) {
      List<String> newWords = new ArrayList<String>();
      newWords.add(s.substring(parent, curr));
      newWords.addAll(currWords);
      build(parent, newWords, s, ans, parents);
    }
  }
  
  public List<String> wordBreak(String s, List<String> wordDict) {
    int maxWordLen = 0;
    int minWordLen = 20;
    Map<Integer, Set<String>> lenSets = new HashMap<Integer, Set<String>>();
    for (String word : wordDict) {
      maxWordLen = Math.max(maxWordLen, word.length());
      minWordLen = Math.min(minWordLen, word.length());
      if (!lenSets.containsKey(word.length())) lenSets.put(word.length(), new HashSet<String>());
      lenSets.get(word.length()).add(word);
    }
    
    Map<Integer, Set<Integer>> parents = new HashMap<Integer, Set<Integer>>();
    int start = 0;
    String copy = s;
    while (start < s.length()) {
      for (int len = minWordLen; len <= copy.length() && len <= maxWordLen; len++) {
        if (lenSets.containsKey(len)) {
          for (String word : lenSets.get(len)) {
            if (copy.startsWith(word)) {
              if (!parents.containsKey(start + word.length())) parents.put(start + word.length(), new HashSet<Integer>());
              parents.get(start + word.length()).add(start);
            }
          }
        }
      }
      copy = copy.substring(1, copy.length());
      start++;
    }
    
    List<String> ans = new ArrayList<String>();
    build(s.length(), new ArrayList<String>(), s, ans, parents);
    return ans;
  }
}