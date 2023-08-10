class Solution {
  public int climbStairs(int n) {
    if (n <= 2) return n;
    int l = 1;
    int r = 2;
    int temp;
    while (n > 2) {
      temp = r + l;
      l = r;
      r = temp;
      n--;
    }
    return r;
  }
}