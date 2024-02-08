class Solution {
  public int countPrimes(int n) {
    if (n < 3) return 0;
    boolean[] comps = new boolean[n];
    for (int m = 2; m <= (int) Math.sqrt(n); m++) {
      if (comps[m] == false) {
        for (int t = m * m; t < n; t += m) comps[t] = true;
      }
    }
    int count = 0;
    for (int m = 2; m < n; m++) {
      if (comps[m] != true) count++;
    }
    return count;
  }
}