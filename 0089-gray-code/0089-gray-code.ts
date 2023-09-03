function grayCode(n: number): number[] {
  function bitSeq(n: number): number[] {
    if (n === 1) return new Array(2).fill(0)
    const lastSeq: number[] = bitSeq(n - 1)
    lastSeq[lastSeq.length - 1] = n - 1
    return [...lastSeq, ...lastSeq]
  }
  
  const seq: number[] = bitSeq(n)
  const ans: number[] = new Array(2 ** n).fill(0)
  for (let i = 0; i < ans.length - 1; i++) {
    ans[i + 1] = ans[i] ^ (1 << (n - 1 - seq[i]))
  }
  return ans
}