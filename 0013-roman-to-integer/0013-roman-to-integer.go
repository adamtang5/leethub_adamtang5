func romanToInt(s string) int {
  lookup := map[string]int{
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  
  ans, i := 0, 0
  for i < len(s) {
    if i < len(s)-1 && lookup[s[i:i+1]] < lookup[s[i+1:i+2]] {
      ans += lookup[s[i+1:i+2]]-lookup[s[i:i+1]]
      i += 2
    } else {
      ans += lookup[s[i:i+1]]
      i++
    }
  }
  return ans
}