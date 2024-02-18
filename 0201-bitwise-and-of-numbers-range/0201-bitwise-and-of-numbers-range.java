class Solution {
  public int rangeBitwiseAnd(int left, int right) {
    List<Integer> powers = new ArrayList<Integer>();
    powers.add(0);
    int p = 1;
    int exp = 0;
    while (exp < 31) {
      powers.add(p);
      p *= 2;
      exp++;
    }
    
    if (left == 0) return 0;
    int lIdx = -1;
    int rIdx = -1;
    int i = 0;
    while (i < powers.size()) {
      if (left >= powers.get(i)) lIdx++;
      if (right >= powers.get(i)) rIdx++;
      i++;
    }
    if (lIdx != rIdx) return 0;
    int base = powers.get(lIdx);
    return base + rangeBitwiseAnd(left - base, right - base);
  }
}