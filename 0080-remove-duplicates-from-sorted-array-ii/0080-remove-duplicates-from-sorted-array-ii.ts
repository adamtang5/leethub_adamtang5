function removeDuplicates(nums: number[]): number {
  let l = -1
  let r = 0
  while (r < nums.length) {
    if (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      nums[l + 1] = nums[r]
      nums[l + 2] = nums[r + 1]
      l += 2
      r++
      while (nums[r - 1] === nums[r]) r++
    } else {
      nums[l + 1] = nums[r]
      l++
      r++
    }
    if (r === nums.length) return l + 1
  }
}