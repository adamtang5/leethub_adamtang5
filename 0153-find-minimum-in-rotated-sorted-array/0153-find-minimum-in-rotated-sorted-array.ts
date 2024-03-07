function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  let maxIdx: number
  if (nums[l] <= nums[r]) {
    return nums[l]
  } else {
    maxIdx = Math.floor((l + r) / 2)
    while (l <= r && nums[maxIdx + 1] > nums[maxIdx]) {
      if (nums[maxIdx] > nums[0]) {
        l = maxIdx + 1
      } else if (nums[maxIdx] < nums[0]) {
        r = maxIdx - 1
      } else {
        l++
      }
      maxIdx = Math.floor((l + r) / 2)
    }
    return nums[maxIdx + 1]
  }
}