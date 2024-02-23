class Solution {
  public int reduce(int n) {
    int ans = 0;
    while (n > 0) {
      ans += n % 10;
      n /= 10;
    }
    return ans;
  }
  
  public int addDigits(int num) {
    while (num >= 10) num = reduce(num);
    return num;
  }
}