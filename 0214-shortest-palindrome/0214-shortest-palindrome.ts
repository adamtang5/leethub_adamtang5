function shortestPalindrome(s: string): string {
  if (s.length < 2) return s
  const rev: string = s.split('').reverse().join('')
  let pre = s
  let post = rev
  while (pre !== post) {
    pre = pre.slice(0, pre.length - 1)
    post = post.slice(1)
  }
  return rev.slice(0, rev.length - pre.length) + s
}