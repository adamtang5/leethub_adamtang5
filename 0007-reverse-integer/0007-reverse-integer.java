class Solution {
  public int reverse(int x) {
    int sign = x >= 0 ? 1 : -1;
    String s = Integer.toString(Math.abs(x));
    String rev = "";
    
    for (int i = 0; i < s.length(); i++) {
      rev = s.charAt(i) + rev;
    }
    try {
      return sign * Integer.parseInt(rev);
    } catch (NumberFormatException e) {
      return 0;
    }
  }
}