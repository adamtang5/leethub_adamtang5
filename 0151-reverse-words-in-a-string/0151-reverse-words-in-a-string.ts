function reverseWords(s: string): string {
  let ans = ""
  let curr = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (ans.length && curr.length) {
        ans = curr + " " + ans
      } else if (curr.length) {
        ans = curr
      }
      curr = ""
    } else {
      curr += s[i]
    }
  }
  if (ans.length && curr.length) {
    ans = curr + " " + ans
  } else if (curr.length) {
    ans = curr
  }
  return ans
}