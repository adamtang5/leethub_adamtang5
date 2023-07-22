class Solution {
  public int lengthOfLastWord(String s) {
    String[] sArray = s.trim().split(" ");
    return sArray[sArray.length - 1].length();
  }
}