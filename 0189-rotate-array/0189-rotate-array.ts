/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k %= nums.length
  const right: number[] = nums.splice(nums.length - k, k)
  nums.splice(0, 0, ...right)
}