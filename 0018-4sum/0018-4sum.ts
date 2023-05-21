function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)
  const ansSet = new Set<string>()
  let i = 0
  let currSum, j, l, r
  while (i < nums.length - 3) {
    j = i + 1
    while (j < nums.length - 2) {
      [l, r] = [j + 1, nums.length - 1]
      while (l < r) {
        currSum = nums[i] + nums[j] + nums[l] + nums[r]
        if (currSum === target) ansSet.add(JSON.stringify([nums[i], nums[j], nums[l], nums[r]]))
        if (currSum <= target) {
          l++
        } else {
          r--
        }
      }
      while (nums[j + 1] === nums[j] && j < nums.length - 2) {
        j++
      }
      j++
    }
    while (nums[i + 1] === nums[i] && i < nums.length -3) {
      i++
    }
    i++
  }
  return Array.from(ansSet).map(s => JSON.parse(s))
}