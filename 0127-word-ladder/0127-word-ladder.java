class Solution {
  public void getPatterns(String word, Map<String, List<String>> patterns) {
    for (int i = 0; i < word.length(); i++) {
      String key = word.substring(0, i) + "*" + word.substring(i + 1, word.length());
      if (!patterns.containsKey(key)) patterns.put(key, new ArrayList<String>());
      List<String> words = patterns.get(key);
      words.add(word);
      patterns.put(key, words);
    }
  }
  
  public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    if (!wordList.contains(endWord)) return 0;
    Map<String, List<String>> patterns = new HashMap();
    List<String> temp = new ArrayList<String>();
    temp.add(beginWord);
    temp.addAll(wordList);
    for (String word : temp) getPatterns(word, patterns);
    
    List<List<String>> pathQ = new ArrayList();
    List<String> init = new ArrayList<String>();
    init.add(beginWord);
    pathQ.add(init);
    Set<String> visited = new HashSet<String>();
    visited.add(beginWord);
    List<String> currPath;
    String currNode;
    int ans = 0;
    while (!pathQ.isEmpty()) {
      currPath = pathQ.remove(0);
      currNode = currPath.get(currPath.size() - 1);
      if (currNode.equals(endWord)) {
        ans = currPath.size();
        break;
      }
      for (int i = 0; i < currNode.length(); i++) {
        String key = currNode.substring(0, i) + "*" + currNode.substring(i + 1, currNode.length());
        List<String> neighbors = patterns.get(key);
        for (String nb : neighbors) {
          if (nb != currNode && !visited.contains(nb)) {
            visited.add(nb);
            List<String> next = new ArrayList<String>();
            next.addAll(currPath);
            next.add(nb);
            pathQ.add(next);
          }
        }
      }
    }
    return ans;
  }
}