function getPermutation(n: number, k: number): string {
  function fact(n: number): number {
    if (n === 0) return 1
    return n * fact(n - 1)
  }
  
  function dfs(q: number, s: string[], ans:string[] = []): string[] {
    if (s.length === 0) return ans
    
    const subSize: number = fact(s.length - 1)
    const subIdx: number = Math.min(q / subSize)
    const ext: string[] = s.splice(subIdx, 1)
    return dfs(q % subSize, s, [...ans, ...ext])
  }
  
  const seq: string[] = Array.from({ length: n }, (v, i) => (i + 1).toString())
  return dfs(k - 1, seq).join("")
}