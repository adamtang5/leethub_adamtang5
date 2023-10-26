function minimumTotal(triangle: number[][]): number {
  let level: number = 0
  let left: number
  let right: number
  while (level < triangle.length - 1) {
    level++
    for (let i = 0; i <= level; i++) {
      left = i - 1 < 0 ? Infinity : triangle[level - 1][i - 1]
      right = i >= level ? Infinity : triangle[level - 1][i]
      triangle[level][i] += Math.min(left, right)
    }
  }
  return Math.min(...triangle[level])
}