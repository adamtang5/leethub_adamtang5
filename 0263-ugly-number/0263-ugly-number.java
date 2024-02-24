class Solution {
  public boolean isUgly(int n) {
    if (n <= 0) return false;
    if (n < 7) return true;
    int[] factors = new int[]{2, 3, 5};
    for (int f : factors) {
      while (n % f == 0) n /= f;
    }
    return n == 1;
  }
}