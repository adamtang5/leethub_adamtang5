function maxProduct(nums: number[]): number {
  let ans: number = Math.max(...nums)
  let currMin = 1
  let currMax = 1
  let temp: number
  nums.forEach(num => {
    temp = currMax
    currMax = Math.max(currMin * num, temp * num, num)
    currMin = Math.min(currMin * num, temp * num, num)
    ans = Math.max(currMax, currMin, ans)
  })
  return ans
}