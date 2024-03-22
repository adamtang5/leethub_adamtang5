function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0
  let l = 0
  let r = nums.length - 1
  let m: number
  if (nums[l + 1] < nums[l]) return l
  if (nums[r - 1] < nums[r]) return r
  while (l < r) {
    m = Math.floor((l + r) / 2)
    if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
      return m
    } else if (nums[m] < nums[m - 1]) {
      r = m
    } else {
      l = m
    }
  }
}