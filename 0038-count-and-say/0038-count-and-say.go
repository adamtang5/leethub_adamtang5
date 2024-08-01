func countAndSay(n int) string {
  if n == 1 {
    return "1"
  }
  return convert(countAndSay(n-1))
}

func convert(s string) string {
  ans, currCh, currLen := "", "", 0
  for i:=0;i<len(s);i++ {
    sub := s[i:i+1]
    if sub == currCh {
      currLen++
    } else {
      if currLen > 0 {
        ans += strconv.Itoa(currLen)
        ans += currCh
      }
      currCh = sub
      currLen = 1
    }
  }
  if currLen > 0 {
    ans += strconv.Itoa(currLen)
    ans += currCh
  }
  return ans
}