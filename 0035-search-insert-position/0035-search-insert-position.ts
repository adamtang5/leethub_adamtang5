function searchInsert(nums: number[], target: number): number {
  if (target < nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length
  let [l, r] = [0, nums.length - 1]
  let pivot = Math.floor((r + l) / 2)
  while (nums[pivot] > target || nums[pivot + 1] <= target) {
    if (nums[pivot] > target) {
      r = pivot - 1
    } else {
      l = pivot + 1
    }
    pivot = Math.floor((r + l) / 2)
  }
  return nums[pivot] === target ? pivot : pivot + 1
}