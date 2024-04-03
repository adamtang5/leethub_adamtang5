class Solution {
  public int trailingZeroes(int n) {
    List<Integer> powers = new ArrayList<Integer>();
    int b = 5;
    while (b <= 10000) {
      powers.add(b);
      b *= 5;
    }
    return powers.stream()
      .reduce(0, (sum, base) -> sum + n / base);
  }
}