function isNumber(s: string): boolean {
  const digitsRe: RegExp = /[0-9]/
  
  function validDec(s: string): boolean {
    if (s.length === 0) return false
    if ("+-".includes(s[0])) return validDec(s.slice(1))
    let dotIdx: number = -1
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ".") {
        if (dotIdx >= 0 || s.length === 1) return false
        dotIdx = i
      } else if (!digitsRe.test(s[i])) {
        return false
      }
    }
    return true
  }
  
  function validInt(s: string): boolean {
    if (s.length === 0) return false
    if ("+-".includes(s[0])) return validDec(s.slice(1))
    for (let i = 0; i < s.length; i++) {
      if (!digitsRe.test(s[i])) return false
    }
    return true
  }
  
  const parts: string[] = s.toLowerCase().split("e")
  if (parts.length === 1) {
    return validDec(parts[0])
  } else if (parts.length === 2) {
    return validDec(parts[0]) && validInt(parts[1])
  } else {
    return false
  }
}