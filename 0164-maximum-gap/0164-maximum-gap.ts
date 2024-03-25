function maximumGap(nums: number[]): number {
  const gMin: number = Math.min(...nums)
  const gMax: number = Math.max(...nums)
  if (nums.length < 2) return 0
  const bucketSize: number = Math.max(1, Math.floor((gMax - gMin) / (nums.length - 1)))
  const buckets = {}
  nums.forEach(num => {
    const key: number = Math.floor((num - gMin) / bucketSize)
    if (key in buckets) {
      buckets[key] = [Math.min(num, buckets[key][0]), Math.max(num, buckets[key][1])]
    } else {
      buckets[key] = [num, num]
    }
  })
  let ans = 0
  let preKey = -1
  const bucketKeys: number[] = Object.keys(buckets).map(d => +d)
  bucketKeys.sort((a, b) => a - b).forEach(key => {
    if (preKey !== -1) ans = Math.max(ans, buckets[key][0] - buckets[preKey][1])
    preKey = key
  })
  return ans
}