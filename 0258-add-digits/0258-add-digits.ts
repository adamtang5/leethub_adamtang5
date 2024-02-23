function addDigits(num: number): number {
  function reduce(n: number): number {
    let ans = 0
    while (n > 0) {
      ans += n % 10
      n = Math.floor(n / 10)
    }
    return ans
  }
  
  while (num >= 10) num = reduce(num)
  return num
}