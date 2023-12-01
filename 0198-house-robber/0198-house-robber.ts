function rob(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(0)
  dp[dp.length - 1] = nums.at(-1)
  if (nums.length > 1) dp[dp.length - 2] = Math.max(nums.at(-2), nums.at(-1))
  for (let i = nums.length - 3; i >= 0; i--) {
    dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1])
  }
  return dp[0]
}