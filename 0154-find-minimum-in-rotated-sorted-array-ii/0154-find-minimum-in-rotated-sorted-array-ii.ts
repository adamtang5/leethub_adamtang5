function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let l = 0
  let r = nums.length - 1
  let m: number
  while (l < r && l >= 0 && r < nums.length) {
    m = Math.floor((l + r) / 2)
    if (m > 0 && nums[m - 1] > nums[m]) return nums[m]
    if (l === m) return Math.min(nums[l], nums[r])
    if (nums[l] < nums[m] && nums[m] < nums[r]) {
      return nums[l]
    } else if (nums[l] > nums[r]) {
      if (nums[m] >= nums[l]) {
        l = m + 1
      } else {
        r = m - 1
      }
    } else if (nums[l] === nums[r]) {
      if (nums[m] === nums[l]) {
        l++
        r--
      } else if (nums[m] > nums[l]) {
        l = m + 1
      } else {
        r = m
      }
    } else if (nums[l] < nums[r]) {
      if (nums[m] === nums[r]) {
        r = m - 1
      } else {
        r = m
      }
    }
  }
  return Math.min(nums[l], nums[r])
}