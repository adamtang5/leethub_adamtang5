class Solution {
  public List<Integer> findSubstring(String s, String[] words) {
    List ans = new ArrayList<Integer>();
    Map tally = new HashMap();
    for (String word : words) {
      if (!tally.containsKey(word)) {
        tally.put(word, 0);
      }
      int val = (int) tally.get(word);
      tally.put(word, val + 1);
    }
    
    int start;
    String currWord;
    int j;
    for (int offset = 0; offset < words[0].length(); offset++) {
      start = offset;
      Map tallyCopy = new HashMap();
      tallyCopy.putAll(tally);
      List currWords = new ArrayList<String>();
      for (int i = offset; i + words[0].length() <= s.length(); i += words[0].length()) {
        currWord = "";
        j = 0;
        while (j < words[0].length()) {
          currWord += s.charAt(i + j);
          j++;
        }
        start = Math.max(i + j - words.length * words[0].length(), start);
        currWords.add(currWord);
        String popped;
        if (words.length + 1 > currWords.size()) {
          popped = "";
        } else {
          popped = (String) currWords.get(currWords.size() - words.length - 1);
        }
        if (tallyCopy.containsKey(popped)) {
          int val = (int) tallyCopy.get(popped);
          tallyCopy.put(popped, val + 1);
        }
        if (tallyCopy.containsKey(currWord)) {
          int val = (int) tallyCopy.get(currWord);
          tallyCopy.put(currWord, val - 1);
          List<Integer> vals = new ArrayList<Integer>(tallyCopy.values());
          boolean allZeroes = vals.stream().allMatch(v -> v == 0);
          if (allZeroes) ans.add(start);
        }
      }
    }
    
    return ans;
  }
}