function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let optSum = -Infinity
  let l: number, r: number
  for (let i = 0; i < nums.length - 2; i++) {
    [l, r] = [i + 1, nums.length - 1]
    while (l < r) {
      if (Math.abs(nums[i] + nums[l] + nums[r] - target) < Math.abs(optSum - target)) {
        optSum = nums[i] + nums[l] + nums[r]
      }
      if (nums[i] + nums[l] + nums[r] < target) {
        l++
      } else if (nums[i] + nums[l] + nums[r] > target) {
        r--
      } else {
        return target
      }
    }
  }
  return optSum
}