class Solution {
  public boolean charMatch(String ch1, String ch2) {
    return ch2.equals("?") || ch2.equals(ch1);
  }
  
  public boolean parse(String s, String[] chunks) {
    if (chunks.length == 0) return true;
    int start = 0;
    int cIdx = 0;
    int j = 1;
    while (cIdx < chunks.length && start < s.length()) {
      while (start < s.length() && !charMatch(s.substring(start, start + 1), chunks[cIdx].substring(0, 1))) {
        start++;
      }
      if (start == s.length()) break;
      j = 1;
      while (j < chunks[cIdx].length() && start + j < s.length() && charMatch(s.substring(start + j, start + j + 1), chunks[cIdx].substring(j, j + 1))) j++;
      if (j == chunks[cIdx].length()) {
        cIdx++;
        start += j;
      } else {
        start++;
      }
    }
    return cIdx == chunks.length;
  }
  
  public boolean isMatch(String s, String p) {
    if (p.equals("")) return s.equals("");
    String t = "";
    for (int i = 0; i < p.length(); i++) {
      if (p.substring(i, i + 1).equals("*")) {
        while (i < p.length() - 1 && p.substring(i + 1, i + 2).equals("*")) i++;
      }
      t += p.substring(i, i + 1);
    }
    p = t;
    int i = 0;
    if (!p.substring(i, i + 1).equals("*")) {
      while (i < p.length() && !p.substring(i, i + 1).equals("*")) {
        if (i >= s.length()) return false;
        if (!charMatch(s.substring(i, i + 1), p.substring(i, i + 1))) return false;
        i++;
      }
      s = s.substring(i, s.length());
      p = p.substring(i, p.length());
    }
    if (p.equals("")) return s.equals("");
    i = 0;
    if (!p.substring(p.length() - 1 - i, p.length() - i).equals("*")) {
      while (i < p.length() && !p.substring(p.length() - 1 - i, p.length() - i).equals("*")) {
        if (i >= s.length()) return false;
        if (!charMatch(s.substring(s.length() - 1 - i, s.length() - i), p.substring(p.length() - 1 - i, p.length() - i))) return false;
        i++;
      }
      s = s.substring(0, s.length() - i);
      p = p.substring(0, p.length() - i);
    }
    if (p.equals("*")) return true;
    return parse(s, p.substring(1, p.length() - 1).split("\\*"));
  }
}