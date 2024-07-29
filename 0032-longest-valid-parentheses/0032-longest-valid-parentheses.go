func longestValidParentheses(s string) int {
  if len(s) < 2 {
    return 0
  }
  dp := make([]int, len(s))
  for i:=0;i<len(s);i++ {
    if i-1 >= 0 && s[i:i+1] == ")" && s[i-1:i] == "(" {
      if i-2 >= 0 {
        dp[i] = dp[i-2] + 2
      } else {
        dp[i] = 2
      }
    } else if i-1 >= 0 && i-1-dp[i-1] >= 0 && s[i:i+1] == ")" && s[i-1:i] == ")" && s[i-1-dp[i-1]:i-dp[i-1]] == "(" {
      a, b := 0, 0
      if i-1 >= 0 {
        a = dp[i-1]
        if i-2-dp[i-1] >= 0 {
          b = dp[i-2-dp[i-1]]
        }
      }
      dp[i] = a+b+2
    }
  }
  ans := 0
  for _, v := range dp {
    if v > ans {
      ans = v
    }
  }
  return ans
}