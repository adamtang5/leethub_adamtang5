class Solution {
  public boolean wordPattern(String pattern, String s) {
    List<String> words = Arrays.asList(s.split(" "));
    if (pattern.length() != words.size()) return false;
    Map<String, String> fw = new HashMap<String, String>();
    Map<String, String> bw = new HashMap<String, String>();
    for (int i = 0; i < pattern.length(); i++) {
      if (!fw.containsKey(pattern.substring(i, i + 1)) && !bw.containsKey(words.get(i))) {
        fw.put(pattern.substring(i, i + 1), words.get(i));
        bw.put(words.get(i), pattern.substring(i, i + 1));
      } else if (fw.containsKey(pattern.substring(i, i + 1)) && !bw.containsKey(words.get(i))) {
        return false;
      } else if (!fw.containsKey(pattern.substring(i, i + 1)) && bw.containsKey(words.get(i))) {
        return false;
      } else if (!fw.get(pattern.substring(i, i + 1)).equals(words.get(i)) || !bw.get(words.get(i)).equals(pattern.substring(i, i + 1))) {
        return false;
      }
    }
    return true;
  }
}