func merge(nums1 []int, m int, nums2 []int, n int)  {
  i, r, j := m - 1, m + n - 1, n - 1
  for j >= 0 && i >= 0 {
    if nums1[i] <= nums2[j] {
      nums1[r] = nums2[j]
      r, j = r - 1, j - 1
    } else {
      nums1[r] = nums1[i]
      r, i = r - 1, i - 1
    }
  }
  if i < 0 {
    for k := j; k >= 0; k-- {
      nums1[k] = nums2[k]
    }
  }
}