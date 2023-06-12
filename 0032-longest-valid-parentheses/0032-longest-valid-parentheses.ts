function longestValidParentheses(s: string): number {
  if (s.length < 2) return 0
  const dp: number[] = new Array(s.length).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' && s[i - 1] === '(') {
      dp[i] = (dp[i - 2] || 0) + 2
    } else if (s[i] === ')' && s[i - 1] === ')' && s[i - 1 - dp[i - 1]] === '(') {
      dp[i] = (dp[i - 1] || 0) + (dp[i - 2 - dp[i - 1]] || 0) + 2
    }
  }
  return Math.max(...dp)
}