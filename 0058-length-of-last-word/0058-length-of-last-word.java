class Solution {
  public int lengthOfLastWord(String s) {
    int i = s.length() - 1;
    int ans = 0;
    while (s.substring(i, i + 1).equals(" ")) i--;
    while (i >= 0 && !s.substring(i, i + 1).equals(" ")) {
      ans++;
      i--;
    }
    return ans;
  }
}