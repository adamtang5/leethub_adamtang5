function search(nums: number[], target: number): boolean {
  let l = 0
  let r = nums.length - 1
  let m: number
  while (l <= r) {
    m = Math.floor((l + r) / 2)
    if (nums[m] === target) return true
    if (nums[l] === nums[m] && nums[m] === nums[r]) {
      l++
      r--
    } else if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return false
}