func letterCombinations(digits string) []string {
  lookup := map[string]string{
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }
  
  if len(digits) == 0 {
    return []string{}
  }
  if len(digits) == 1 {
    return strings.Split(lookup[digits], "")
  }
  
  leadLetters := letterCombinations(digits[0:1])
  ans := []string{}
  for _, ch := range leadLetters {
    for _, str := range letterCombinations(digits[1:]) {
      ans = append(ans, ch+str)
    }
  }
  return ans
}