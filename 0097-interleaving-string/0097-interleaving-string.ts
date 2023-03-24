function isInterleave(s1: string, s2: string, s3: string): boolean {
  const dp: number[][] = new Array(s1.length + 1).fill(null).map(() => new Array(s2.length + 1).fill(0))
  const queue: number[][] = [[0, 0]]
  while (queue.length) {
    const [x, y]: number[] = queue.shift()

    if (x + y === s3.length) break
    if (s3[x + y] === s1[x] && dp[x + 1][y] === 0) {
      dp[x + 1][y] = x + y + 1
      queue.push([x + 1, y])
    }
    if (s3[x + y] === s2[y] && dp[x][y + 1] === 0) {
      dp[x][y + 1] = x + y + 1
      queue.push([x, y + 1])
    }
  }

  return dp[s1.length][s2.length] === s3.length
}