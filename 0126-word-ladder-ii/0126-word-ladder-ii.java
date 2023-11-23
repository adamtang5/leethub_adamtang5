class Solution {
  public List<List<String>> backtrack(List<List<String>> paths, String beginWord, Map<String, Set<String>> parents) {
    if (paths.get(0).get(0) == beginWord) {
      return paths.stream()
        .filter(path -> path.get(0) == beginWord)
        .collect(Collectors.toList());
    }
    List<List<String>> ans = new ArrayList();
    for (List<String> path : paths) {
      for (String parent : parents.get(path.get(0))) {
        List<String> next = new ArrayList<String>();
        next.add(parent);
        next.addAll(path);
        ans.add(next);
      }
    }
    return backtrack(ans, beginWord, parents);
  }
  
  public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
    List<Set<String>> layers = new ArrayList();
    Set<String> init = new HashSet<String>();
    init.add(beginWord);
    layers.add(init);
    
    Set<String> visited = new HashSet<String>();
    visited.add(beginWord);
    
    Set<String> wordSet = new HashSet<String>(wordList);
    
    Map<String, Set<String>> parents = new HashMap<String, Set<String>>();
    
    while (!visited.contains(endWord) && !layers.get(layers.size() - 1).isEmpty()) {
      Set<String> currLayer = layers.get(layers.size() - 1);
      layers.add(new HashSet<String>());
      for (String currWord : currLayer) {
        for (int j = 0; j < currWord.length(); j++) {
          for (char c = 'a'; c <= 'z'; c++) {
            String nextWord = currWord.substring(0, j) + String.valueOf(c) + currWord.substring(j + 1, currWord.length());
            if (!nextWord.equals(currWord) && wordSet.contains(nextWord) && !visited.contains(nextWord)) {
              Set<String> nextLayer = layers.get(layers.size() - 1);
              nextLayer.add(nextWord);
              if (!parents.containsKey(nextWord)) parents.put(nextWord, new HashSet<String>());
              parents.get(nextWord).add(currWord);
            }
          }
        }
      }
      visited.addAll(layers.get(layers.size() - 1));
    }
    
    if (!visited.contains(endWord)) return new ArrayList();
    List<List<String>> paths = new ArrayList();
    List<String> initPath = new ArrayList<String>();
    initPath.add(endWord);
    paths.add(initPath);
    return backtrack(paths, beginWord, parents);
  }
}