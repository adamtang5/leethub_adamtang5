class Solution {
  public int reverse(int x) {
    int sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    String s = Integer.toString(x);
    String rev = "";
    char ch;
    
    for (int i = 0; i < s.length(); i++) {
      ch = s.charAt(i);
      rev = ch + rev;
    }
    try {
      return sign * Integer.parseInt(rev);
    } catch (NumberFormatException e) {
      return 0;
    }
  }
}