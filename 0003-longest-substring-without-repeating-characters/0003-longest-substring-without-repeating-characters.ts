function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0
  let [sub, max] = ['', 0]
  
  for (let i = 0; i < s.length; i++) {
    if (!sub.includes(s[i])) {
      sub += s[i]
    } else {
      sub = sub.slice(sub.indexOf(s[i]) + 1) + s[i]
    }
    if (sub.length > max) max = sub.length
  }
  return max
}