class Solution {
  public String longestCommonPrefix(String[] strs) {
    String ans = "";
    int minLen = Integer.MAX_VALUE;
    for (String s : strs) {
      minLen = Math.min(minLen, s.length());
    }
    
    Character c;
    for (int i = 0; i < minLen; i++) {
      c = new Character(strs[0].charAt(i));
      Character ch;
      for (int j = 1; j < strs.length; j++) {
        ch = new Character(strs[j].charAt(i));
        if (!c.equals(ch)) {
          return ans;
        }
      }
      ans += c;
    }
    return ans;
  }
}