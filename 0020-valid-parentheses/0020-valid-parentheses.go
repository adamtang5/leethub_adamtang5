func isValid(s string) bool {
  stack := []string{}
  open := map[string]string{
    ")": "(",
    "]": "[",
    "}": "{",
  }
  var p string
  for i:=0;i<len(s);i++ {
    p = s[i:i+1]
    if strings.Contains("([{", p) {
      stack = append(stack, p)
    } else {
      if len(stack) == 0 {
        return false
      }
      if stack[len(stack)-1] != open[p] {
        return false
      }
      stack = stack[:len(stack)-1]
    }
  }
  return len(stack) == 0
}