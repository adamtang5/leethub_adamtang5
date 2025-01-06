function isNumber(s: string): boolean {
  function trimSign(s: string): string {
    if ("+-".includes(s[0])) {
      return s.slice(1)
    } else {
      return s
    }
  }

  function validNum(s: string, numType: string): boolean {
    if (s.length === 0) return false
    if (numType === "dec") {
      let dotIdx: number = -1
      for (let i = 0; i < s.length; i++) {
        if (s[i] === ".") {
          if (dotIdx >= 0 || s.length === 1) return false
          dotIdx = i
        } else if (!/[0-9]/.test(s[i])) {
          return false
        }
      }
    } else if (numType === "int") {
      for (let i = 0; i < s.length; i++) {
        if (!/[0-9]/.test(s[i])) return false
      }
    }
    return true
  }
  
  const parts: string[] = s.toLowerCase().split("e").map(part => trimSign(part))
  if (parts.length === 1) {
    return validNum(parts[0], "dec")
  } else if (parts.length === 2) {
    return validNum(parts[0], "dec") && validNum(parts[1], "int")
  } else {
    return false
  }
}