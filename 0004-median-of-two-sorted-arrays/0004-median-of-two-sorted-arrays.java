class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    int[] a;
    int[] b;
    if (nums1.length > nums2.length) {
      a = nums2;
      b = nums1;
    } else {
      a = nums1;
      b = nums2;
    }
    
    int totalLen = a.length + b.length;
    int half = (int) Math.floor(totalLen / (double) 2);
    int l = 0;
    int r = a.length - 1;
    int aPointer;
    int bPointer;
    double aLeft;
    double aRight;
    double bLeft;
    double bRight;
    while (true) {
      aPointer = (int) Math.floor((l + r) / (double) 2);
      bPointer = half - aPointer - 2;
      aLeft = aPointer >= 0 ? (double) a[aPointer] : Double.NEGATIVE_INFINITY;
      aRight = aPointer + 1 < a.length ? (double) a[aPointer + 1] : Double.POSITIVE_INFINITY;
      bLeft = bPointer >= 0 ? (double) b[bPointer] : Double.NEGATIVE_INFINITY;
      bRight = bPointer + 1 < b.length ? (double) b[bPointer + 1] : Double.POSITIVE_INFINITY;
      
      if (aLeft <= bRight && bLeft <= aRight) {
        if (totalLen % 2 != 0) {
          return (double) Math.min(aRight, bRight);
        } else {
          return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / (double) 2;
        }
      } else if (aLeft > bRight) {
        r = aPointer - 1;
      } else {
        l = aPointer + 1;
      }
    }
  }
}