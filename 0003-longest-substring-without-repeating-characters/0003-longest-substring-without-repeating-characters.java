class Solution {
  public int lengthOfLongestSubstring(String s) {
    if (s.length() == 0) return 0;
    String sub = "";
    int max = 0;
    
    for (int i = 0; i < s.length(); i++) {
      if (!sub.contains("" + s.charAt(i))) {
        sub += s.charAt(i);
      } else {
        sub = sub.substring(sub.indexOf(s.charAt(i)) + 1) + s.charAt(i);
      }
      if (sub.length() > max) max = sub.length();
    }
    return max;
  }
}