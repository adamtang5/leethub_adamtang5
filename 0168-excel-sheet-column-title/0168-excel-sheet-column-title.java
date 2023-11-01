class Solution {
  public String convertToTitle(int columnNumber) {
    String ans = "";
    int code;
    while (columnNumber > 0) {
      if (columnNumber % 26 > 0) {
        code = columnNumber % 26;
        columnNumber = columnNumber / 26;
      } else {
        code = 26;
        columnNumber -= code;
        columnNumber /= code;
      }
      ans = new Character((char) ((int) 'A' + code - 1)).toString() + ans;
    }
    return ans;
  }
}