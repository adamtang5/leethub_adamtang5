function maxSubArray(nums: number[]): number {
  let prevMax: number = -Infinity
  let currMax: number = -Infinity
  let ans: number = -Infinity
  
  nums.forEach(n => {
    prevMax = currMax
    currMax = Math.max(n, n + prevMax)
    ans = Math.max(ans, currMax)
  })
  
  return ans
}