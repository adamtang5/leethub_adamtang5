class Solution {
  public int strStr(String haystack, String needle) {
    int l = 0;
    int j;
    int lenDiff = haystack.length() - needle.length();
    char lChar;
    char rChar;
    while (l <= lenDiff) {
      lChar = haystack.charAt(l);
      rChar = needle.charAt(0);
      while (l <= lenDiff && lChar != rChar) {
        l++;
        if (l < haystack.length()) lChar = haystack.charAt(l);
      }
      if (l > lenDiff) break;
      j = 0;
      lChar = haystack.charAt(l + j);
      rChar = needle.charAt(j);
      while (j < needle.length() && lChar == rChar) {
        j++;
        if (j < needle.length()) {
          lChar = haystack.charAt(l + j);
          rChar = needle.charAt(j);
        }
      }
      if (j == needle.length()) {
        return l;
      } else {
        l++;
      }
    }
    return -1;
  }
}