func reverse(x int) int {
  var sign int
  if x >= 0 {
    sign = 1
  } else {
    sign = -1
  }
  var a int
  if x >= 0 {
    a = x
  } else {
    a = -x
  }
  s, rev := strconv.Itoa(a), ""
  for i := 0; i < len(s); i++ {
    rev = string(s[i]) + rev
  }
  ans, err := strconv.Atoi(rev)
  if err != nil {
    return 0
  } else {
    if sign*ans < -2147483648 || sign*ans >= 2147483648 {
      return 0
    } else {
      return sign*ans
    }
  }
}