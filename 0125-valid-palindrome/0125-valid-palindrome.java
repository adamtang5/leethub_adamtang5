class Solution {
  public boolean isPalindrome(String s) {
    s = s.toLowerCase();
    String t = "";
    for (int i = 0; i < s.length(); i++) {
      if (Character.isLetterOrDigit(s.charAt(i))) {
        t += s.substring(i, i + 1);
      }
    }
    int l = 0;
    int r = t.length() - 1;
    while (l < r) {
      if (t.charAt(l) != t.charAt(r)) {
        return false;
      } else {
        l++;
        r--;
      }
    }
    return true;
  }
}