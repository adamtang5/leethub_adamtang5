func restoreIpAddresses(s string) []string {
  ans := []string{}
  if len(s) < 4 || len(s) > 12 {
    return ans
  }
  if len(s) == 4 {
    addr := ""
    for i := 0; i < len(s); i++ {
      addr += s[i:i+1]
      if i < len(s) - 1 {
        addr += "."
      }
    }
    ans = append(ans, addr)
    return ans
  }

  dfs(s, 3, "", &ans)
  return ans
}

func dfs(s string, octIdx int, addr string, ans *[]string)  {
  if len(s) == 0 {
    return
  }
  if len(s) > (octIdx + 1) * 3 {
    return
  }
  if octIdx == 0 && !validOctet(s) {
    return
  }
  if validOctet(s) && octIdx == 0 {
    *ans = append(*ans, s + addr)
    return
  }
  for digits := 1; digits <= min(len(s), 3); digits++ {
    oct := s[len(s) - digits:]
    if validOctet(oct) {
      dfs(s[:len(s) - digits], octIdx - 1, "." + oct + addr, ans)
    }
  }
}

func validOctet(s string) bool {
  if len(s) > 3 || len(s) < 1 {
    return false
  }
  if len(s) > 1 && s[0] == "0"[0] {
    return false
  }
  if v, err := strconv.Atoi(s); err == nil && v > 255 {
    return false
  }
  return true
}