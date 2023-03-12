function twoSum(nums: number[], target: number): number[] {
  const indices: {} = {}
  for (let i = 0; i < nums.length; i++) {
    if (indices[nums[i]] !== undefined) {
      return [indices[nums[i]], i]
    } else {
      indices[target - nums[i]] = i
    }
  }
}