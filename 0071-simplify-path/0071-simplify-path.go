func simplifyPath(path string) string {
  names, stack := strings.Split(path, "/"), []string{}
  for _, name := range names {
    if name == ".." {
      if len(stack) > 0 {
        stack = stack[:len(stack)-1]
      }
    } else if name != "" && name != "." {
      stack = append(stack, name)
    }
  }
  ans := ""
  for _, name := range stack {
    ans += "/"
    ans += name
  }
  if len(ans) == 0 {
    ans = "/"
  }
  return ans
}