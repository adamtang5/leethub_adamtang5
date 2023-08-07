class Solution {
  public int mySqrt(int x) {
    if (x == Integer.MAX_VALUE) return mySqrt(x - 1);
    int pivot = 46340;
    if (x >= pivot * pivot) return pivot;
    if (x < 2) return x;
    int l = 0;
    int r = x;
    while (l < r) {
      if (pivot * pivot <= x && (pivot + 1) * (pivot + 1) > 0 && (pivot + 1) * (pivot + 1) > x) {
        break;
      } else if (pivot * pivot > x) {
        r = pivot;
      } else {
        l = pivot;
      }
      pivot = l + (r - l) / 2;
    }
    return pivot;
  }
}