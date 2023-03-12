function countKDifference(nums: number[], k: number): number {
  const indices = {}
  let count = 0
  for (let num of nums) {
    indices[num] = indices[num] || 0
    count += indices[num]
    indices[num + k] = indices[num + k] || 0
    indices[num + k]++
    indices[num - k] = indices[num - k] || 0
    indices[num - k]++
  }
  return count
}