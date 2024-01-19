function isHappy(n: number): boolean {
  function reduce(num: number): number {
    let ans = 0
    let d = 0
    while (num > 0) {
      d = num % 10
      ans += d * d
      num = Math.floor(num / 10)
    }
    return ans
  }
  
  let iter = 7
  while (n !== 1 && iter > 0) {
    n = reduce(n)
    iter--
  }
  return n === 1
}