function intToRoman(num: number): string {
  const lookup: {}[] = [
    {
      1: 'I',
      5: 'V',
    },
    {
      1: 'X',
      5: 'L',
    },
    {
      1: 'C',
      5: 'D',
    },
    {
      1: 'M',
    },
  ]
  
  function digit2Roman(val: number, pow: number): string {
    let ans = ''
    switch (val % 5) {
      case 4:
        if (val > 5) {
          ans += lookup[pow][1] + lookup[pow + 1][1]
        } else {
          ans += lookup[pow][1] + lookup[pow][5]
        }
        break
      default:
        if (val >= 5) ans += lookup[pow][5]
        ans += new Array(val % 5).fill(lookup[pow][1]).join('')
    }
    return ans
  }
  
  const digits: number[] = []
  while (num > 0) {
    digits.push(num % 10)
    num = Math.floor(num / 10)
  }
  
  let ans = ''
  digits.forEach((digit, pow) => ans = digit2Roman(digit, pow) + ans)
  return ans
}