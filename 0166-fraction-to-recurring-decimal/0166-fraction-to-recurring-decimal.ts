function fractionToDecimal(numerator: number, denominator: number): string {
  let pre = ""
  let post = ""
  let num = Math.abs(numerator)
  let denom = Math.abs(denominator)
  let prev: number
  const dp = {}
  let d = Math.floor(num / denom)
  pre = d.toString()
  num -= d * denom
  while (num !== 0) {
    num *= 10
    if (num in dp) {
      if (prev !== undefined) post = dp[prev].val
      let [i, curr] = [1, prev]
      while (curr !== num) {
        curr = dp[curr].prev
        i++
      }
      const first = post.slice(0, post.length - i)
      const second = post.slice(post.length - i)
      post = `${first}(${second})`
      return numerator === 0 || numerator > 0 && denominator > 0 || numerator < 0 && denominator < 0 ?
        `${pre}.${post}` : `-${pre}.${post}`
    }
    d = Math.floor(num / denom)
    post += d.toString()
    if (!(num in dp)) {
      dp[num] = {
        val: prev !== undefined ? dp[prev].val + d.toString() : d.toString(),
        prev,
      }
    }
    prev = num
    num -= d * denom
  }
  let ans = pre + (post.length ? "." + post : "")
  return numerator === 0 || numerator > 0 && denominator > 0 || numerator < 0 && denominator < 0 ?
    ans : "-" + ans
}