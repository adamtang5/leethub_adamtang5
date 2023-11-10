public class Solution {
  // you need to treat n as an unsigned value
  public int hammingWeight(int n) {
    int ans = 0;
    for (int i = 0; i < 32; i++) {
      if ((int) (n & 1) > 0) ans++;
      n >>= 1;
    }
    return ans;
  }
}