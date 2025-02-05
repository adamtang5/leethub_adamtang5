func grayCode(n int) []int {
  seq, ans := bitSeq(n), make([]int, 1 << n)
  for i := 0; i < len(ans) - 1; i++ {
    ans[i + 1] = ans[i] ^ (1 << (n - 1 - seq[i]))
  }
  return ans
}

func bitSeq(n int) []int {
  if n == 1 {
    return make([]int, 2)
  }
  lastSeq := bitSeq(n - 1)
  lastSeq[len(lastSeq) - 1] = n - 1
  ans := make([]int, len(lastSeq) * 2)
  for i := 0; i < len(lastSeq); i++ {
    ans[i] = lastSeq[i]
    ans[i + len(lastSeq)] = lastSeq[i]
  }
  return ans
}