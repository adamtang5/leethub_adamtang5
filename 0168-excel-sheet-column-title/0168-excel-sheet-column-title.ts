function convertToTitle(columnNumber: number): string {
  let ans = ''
  let code: number
  while (columnNumber > 0) {
    if (columnNumber % 26) {
      code = columnNumber % 26
      columnNumber = Math.floor(columnNumber / 26)
    } else {
      code = 26
      columnNumber -= code
      columnNumber /= code
    }
    ans = String.fromCharCode('A'.charCodeAt(0) + code - 1) + ans
  }
  return ans
}