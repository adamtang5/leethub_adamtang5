class Solution {
  public String convert(String s, int numRows) {
    if (numRows == 1) return s;
    String[] rows = Collections.nCopies(numRows, "").toArray(new String[numRows]);
    int newBase = (numRows - 1) * 2;
    for (int i = 0; i < s.length(); i++) {
      int iMod = i % newBase;
      int newIdxMod = iMod <= newBase / (double) 2 ? iMod : newBase - iMod;
      rows[newIdxMod] += s.charAt(i);
    }
    return String.join("", rows);
  }
}