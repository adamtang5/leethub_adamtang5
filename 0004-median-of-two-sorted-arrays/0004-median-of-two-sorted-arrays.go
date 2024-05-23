func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
  var a []int
  var b []int
  if len(nums1) > len(nums2) {
    a, b = nums2, nums1
  } else {
    a, b = nums1, nums2
  }
  totalLen := len(a) + len(b)
  half, l, r := int(math.Floor(float64(totalLen) / 2.0)), 0, len(a)-1
  aPointer, bPointer, aLeft, aRight, bLeft, bRight := 0, 0, 0.0, 0.0, 0.0, 0.0
  for true {
    aPointer = int(math.Floor(float64(l + r) / 2.0))
    bPointer = half-aPointer-2
    if aPointer >= 0 {
      aLeft = float64(a[aPointer])
    } else {
      aLeft = math.Inf(-1)
    }
    if aPointer+1 < len(a) {
      aRight = float64(a[aPointer+1])
    } else {
      aRight = math.Inf(1)
    }
    if bPointer >= 0 {
      bLeft = float64(b[bPointer])
    } else {
      bLeft = math.Inf(-1)
    }
    if bPointer+1 < len(b) {
      bRight = float64(b[bPointer+1])
    } else {
      bRight = math.Inf(1)
    }
    if aLeft <= bRight && bLeft <= aRight {
      if totalLen % 2 == 0 {
        return (math.Max(aLeft, bLeft)+math.Min(aRight, bRight)) / 2.0
      } else {
        return math.Min(aRight, bRight)
      }
    } else if aLeft > bRight {
      r = aPointer-1
    } else {
      l = aPointer+1
    }
  }
  return 0.0
}