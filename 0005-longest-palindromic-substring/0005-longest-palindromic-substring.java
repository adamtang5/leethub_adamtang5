class Solution {
  public String longestPalindrome(String s) {
    if (s.length() < 2) return s;
    
    int maxLen = 1;
    String maxSub = s.substring(0, 1);
    int l;
    int r;
    
    for (int i = 0; i < s.length(); i++) {
      // odd
      l = i;
      r = i;
      while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxSub = s.substring(l, r + 1);
        }
        l--;
        r++;
      }

      // even
      l = i;
      r = i + 1;
      while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxSub = s.substring(l, r + 1);
        }
        l--;
        r++;
      }
    }
    return maxSub;
  }
}