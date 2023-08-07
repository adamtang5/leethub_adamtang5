class Solution {
  public int mySqrt(int x) {
    int pivot = 46340;
    if (x >= pivot * pivot) return pivot;
    if (x < 2) return x;
    int l = 0;
    int r = x;
    while (l < r) {
      if (pivot * pivot <= x && (pivot + 1) * (pivot + 1) > x) {
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