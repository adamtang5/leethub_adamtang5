function majorityElement(nums: number[]): number {
  let ans: number
  let count = 0
  for (const num of nums) {
    if (!count) {
      ans = num
      count++
    } else {
      count = ans === num ? count + 1 : count - 1
    }
  }
  return ans
}