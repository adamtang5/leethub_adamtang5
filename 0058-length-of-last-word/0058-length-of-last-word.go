func lengthOfLastWord(s string) int {
  sSlice := strings.Split(strings.Trim(s, " "), " ")
  return len(sSlice[len(sSlice)-1])
}