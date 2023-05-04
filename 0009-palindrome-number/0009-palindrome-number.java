class Solution {
  public boolean isPalindrome(int x) {
    if (x < 0) return false;
    if (x < 10) return true;
    
    String s = Integer.toString(x);
    int l = 0;
    int r = s.length() - 1;
    while (l < r) {
      if (s.charAt(l) != s.charAt(r)) {
        return false;
      } else {
        l++;
        r--;
      }
    }
    return true;
  }
}