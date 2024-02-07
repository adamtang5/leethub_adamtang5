function countPrimes(n: number): number {
  if (n < 3) return 0
  const comps: boolean[] = new Array(n).fill(false)
  for (let m = 2; m <= Math.floor(Math.sqrt(n)); m++) {
    if (!comps[m]) {
      for (let t = m * m; t < n; t += m) comps[t] = true
    }
  }
  return comps.filter(x => !x).length - 2
}