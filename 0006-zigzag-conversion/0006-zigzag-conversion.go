func convert(s string, numRows int) string {
  if numRows == 1 {
    return s
  }
  rows, newBase := make([]string, numRows), (numRows-1)*2
  for i := 0; i < len(s); i++ {
    iMod := i%newBase
    var newIdxMod int
    if iMod <= newBase / 2 {
      newIdxMod = iMod
    } else {
      newIdxMod = newBase-iMod
    }
    rows[newIdxMod] += s[i:i+1]
  }
  return strings.Join(rows, "")
}