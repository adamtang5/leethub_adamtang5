function strStr(haystack: string, needle: string): number {
  let [l, j] = [0, 0]
  const lenDiff: number = haystack.length - needle.length
  while (l <= lenDiff) {
    while (l <= lenDiff && haystack[l] !== needle[0]) l++
    if (l > lenDiff) break
    j = 0
    while (j < needle.length && haystack[l + j] === needle[j]) j++
    if (j === needle.length) {
      return l
    } else {
      l++
    }
  }
  return -1
}