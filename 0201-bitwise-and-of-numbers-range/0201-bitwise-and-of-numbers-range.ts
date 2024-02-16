const powers: number[] = [0]
let p = 1
while (p <= 2147483647) {
  powers.push(p)
  p *= 2
}

function rangeBitwiseAnd(left: number, right: number): number {
  if (left === 0) return 0
  let lIdx = -1
  let rIdx = -1
  let i = 0
  while (i < powers.length) {
    if (left >= powers[i]) lIdx++
    if (right >= powers[i]) rIdx++
    i++
  }
  if (lIdx !== rIdx) return 0
  return powers[lIdx] + rangeBitwiseAnd(left - powers[lIdx], right - powers[lIdx])
}