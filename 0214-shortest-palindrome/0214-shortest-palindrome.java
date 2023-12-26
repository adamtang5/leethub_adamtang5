class Solution {
  public String shortestPalindrome(String s) {
    if (s.length() < 2) return s;
    String rev = "";
    for (int i = 0; i < s.length(); i++) {
      rev = s.charAt(i) + rev;
    }
    String pre = s;
    String post = rev;
    while (!pre.equals(post)) {
      pre = pre.substring(0, pre.length() - 1);
      post = post.substring(1);
    }
    return rev.substring(0, rev.length() - pre.length()) + s;
  }
}