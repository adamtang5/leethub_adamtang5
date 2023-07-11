class Solution {
  public double myPow(double x, int n) {
    if (n > 0) {
      return n % 2 != 0 ? x * myPow(x, n - 1) : myPow(x * x, (int) (n / 2));
    } else if (n < 0) {
      return n % 2 != 0 ? myPow(x, n + 1) / x : myPow(x * x, (int) (n / 2));
    }
    return (double) 1;
  }
}