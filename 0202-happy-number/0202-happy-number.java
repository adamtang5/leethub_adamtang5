class Solution {
  public int reduce(int n) {
    int ans = 0;
    int d;
    while (n > 0) {
      d = n % 10;
      ans += d * d;
      n /= 10;
    }
    return ans;
  }
  
  public boolean isHappy(int n) {
    for (int iter = 7; iter > 0; iter--) {
      if (n == 1) return true;
      n = reduce(n);
    }
    return n == 1;
  }
}