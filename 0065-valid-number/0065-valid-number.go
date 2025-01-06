func isNumber(s string) bool {
  s = strings.ToLower(s)
  parts := []string{}
  if !strings.Contains(s, "e") {
    parts = append(parts, trimSign(s))
  } else {
    parts = append(parts, trimSign(s[:strings.Index(s, "e")]))
    parts = append(parts, trimSign(s[strings.Index(s, "e")+1:]))
  }

  if len(parts) == 1 {
    return validNum(parts[0], "dec")
  } else if len(parts) == 2 {
    return validNum(parts[0], "dec") && validNum(parts[1], "int")
  } else {
    return false
  }
}

func validNum(s string, numType string) bool {
  if len(s) == 0 {
    return false
  }
  if numType == "dec" {
    dotIdx := -1
    for i:=0;i<len(s);i++ {
      if s[i:i+1] == "." {
        if dotIdx >= 0 || len(s) == 1 {
          return false
        }
        dotIdx = i
      } else if match, _ := regexp.MatchString("[0-9]", s[i:i+1]); !match {
        return false
      }
    }
  } else if numType == "int" {
    for i:=0;i<len(s);i++ {
      if match, _ := regexp.MatchString("[0-9]", s[i:i+1]); !match {
        return false
      }
    }
  }
  return true
}

func trimSign(s string) string {
  if len(s) > 0 && strings.Contains("+-", s[:1]) {
    return s[1:]
  } else {
    return s
  }
}