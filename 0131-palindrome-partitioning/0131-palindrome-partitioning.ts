function partition(s: string): string[][] {
  const ans: string[][] = []
  const part: string[] = []
  
  function isPali(st: string, l: number, r: number): boolean {
    while (l < r) {
      if (st[l] !== st[r]) return false
      l++
      r--
    }
    return true
  }
  
  function dfs(i: number): void {
    if (i >= s.length) {
      ans.push(part.slice())
      return
    }
    for (let j = i; j < s.length; j++) {
      if (isPali(s, i, j)) {
        part.push(s.slice(i, j + 1))
        dfs(j + 1)
        part.pop()
      }
    }
  }

  dfs(0)
  return ans
}