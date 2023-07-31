function addBinary(a: string, b: string): string {
  let ans: string = ""
  let [carry, l, r] = [0, 0, 0]
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    l = a[a.length - i - 1] === '1' ? 1 : 0
    r = b[b.length - i - 1] === '1' ? 1 : 0
    ans = (l ^ r ^ carry).toString() + ans
    carry = l & r | l & carry | r & carry
  }
  if (carry) ans = carry.toString() + ans
  return ans
}