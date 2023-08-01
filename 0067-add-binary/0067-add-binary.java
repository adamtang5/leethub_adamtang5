class Solution {
  public String addBinary(String a, String b) {
    String ans = "";
    int carry = 0;
    int l = 0;
    int r = 0;
    for (int i = 0; i < Math.max(a.length(), b.length()); i++) {
      l = i < a.length() && a.substring(a.length() - i - 1, a.length() - i).equals("1") ? 1 : 0;
      r = i < b.length() && b.substring(b.length() - i - 1, b.length() - i).equals("1") ? 1 : 0;
      ans = String.valueOf(l ^ r ^ carry) + ans;
      carry = l & r | l & carry | r & carry;
    }
    if (carry > 0) ans = String.valueOf(carry) + ans;
    return ans;
  }
}