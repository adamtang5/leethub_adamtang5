class Solution {
  public String convert(String s) {
    String ans = "";
    String currCh = "";
    int currLen = 0;
    for (int i = 0; i < s.length(); i++) {
      String sub = s.substring(i, i + 1);
      if (sub.equals(currCh)) {
        currLen++;
      } else {
        if (currLen > 0) ans += String.valueOf(currLen) + currCh;
        currCh = sub;
        currLen = 1;
      }
    }
    if (currLen > 0) ans += String.valueOf(currLen) + currCh;
    return ans;
  }
  
  public String countAndSay(int n) {
    if (n == 1) return "1";
    return convert(countAndSay(n - 1));
  }
}