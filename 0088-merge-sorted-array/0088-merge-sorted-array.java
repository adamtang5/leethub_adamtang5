class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1;
    int r = m + n - 1;
    int j = n - 1;
    while (j >= 0 && i >= 0) {
      if (nums1[i] <= nums2[j]) {
        nums1[r] = nums2[j];
        r--;
        j--;
      } else {
        nums1[r] = nums1[i];
        r--;
        i--;
      }
    }
    if (i < 0) {
      for (int k = j; k >= 0; k--) {
        nums1[k] = nums2[k];
      }
    }
  }
}