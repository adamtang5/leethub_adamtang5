func groupAnagrams(strs []string) [][]string {
  groups := map[string][]string{}
  for _, s := range strs {
    chList := strings.Split(s, "")
    sort.Strings(chList)
    key := strings.Join(chList, ",")
    _, ok := groups[key]
    if !ok {
      groups[key] = []string{}
    }
    groups[key] = append(groups[key], s)
  }
  ans := [][]string{}
  for _, v := range groups {
    ans = append(ans, v)
  }
  return ans
}