class Solution {
  public String multiply(String num1, String num2) {
    if (num1.equals("0") || num2.equals("0")) return "0";
    int[] products = new int[num1.length() + num2.length()];
    Arrays.fill(products, 0);
    int p1;
    int p2;
    int prod;
    int place;
    for (int i = num1.length() - 1; i >= 0; i--) {
      p1 = num1.length() - i - 1;
      for (int j = num2.length() - 1; j >= 0; j--) {
        p2 = num2.length() - j - 1;
        place = p1 + p2;
        prod = Integer.valueOf(num1.substring(i, i + 1)) * Integer.valueOf(num2.substring(j, j + 1));
        products[place] += prod % 10;
        products[place + 1] += (int) Math.floor(prod / (double) 10);
      }
    }
    for (int i = 0; i < products.length - 1; i++) {
      if (products[i] > 9) {
        products[i + 1] += (int) Math.floor(products[i] / (double) 10);
        products[i] %= 10;
      }
    }
    String ans = "";
    for (int i = 0; i < products.length; i++) {
      if (i == products.length - 1 && products[i] == 0) break;
      ans = String.valueOf(products[i]) + ans;
    }
    return ans;
  }
}