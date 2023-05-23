function generateParenthesis(n: number): string[] {
  const dp = {}
  dp['0-0'] = ['']
  dp['0-1'] = [')']
  
  function valid(nOpen: number, nClose: number): boolean {
    return nClose >= nOpen && nOpen >= 0 && nClose >= 0
  }
  
  function dfs(nOpen: number, nClose: number): string[] {
    if (dp[`${nOpen}-${nClose}`]) return dp[`${nOpen}-${nClose}`]
    
    let ans: string[] = []
    if (valid(nOpen - 1, nClose)) {
      ans = [...ans, ...dfs(nOpen - 1, nClose).map(seq => '(' + seq)]
    }
    if (valid(nOpen, nClose - 1)) {
      ans = [...ans, ...dfs(nOpen, nClose - 1).map(seq => ')' + seq)]
    }
    dp[`${nOpen}-${nClose}`] = ans
    return ans
  }
  return dfs(n, n)
}