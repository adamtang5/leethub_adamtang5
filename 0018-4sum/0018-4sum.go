func fourSum(nums []int, target int) [][]int {
  sort.Ints(nums)
  set := map[string]bool{}
  i, j, l, r, currSum := 0, 0, 0, 0, 0
  key := ""
  for i < len(nums)-3 {
    j = i+1
    for j < len(nums)-2 {
      l, r = j+1, len(nums)-1
      for l < r {
        currSum = nums[i]+nums[j]+nums[l]+nums[r]
        if currSum == target {
          key = strconv.Itoa(nums[i])+","+strconv.Itoa(nums[j])+","+strconv.Itoa(nums[l])+","+strconv.Itoa(nums[r])
          set[key] = true
        }
        if currSum <= target {
          l++
        } else {
          r--
        }
      }
      for nums[j+1] == nums[j] && j < len(nums)-2 {
        j++
      }
      j++
    }
    for nums[i+1] == nums[i] && i < len(nums)-3 {
      i++
    }
    i++
  }
  
  ans := [][]int{}
  for k, _ := range set {
    match := []int{}
    currS := ""
    for i:=0;i<len(k);i++ {
      if k[i] != 44 {
        currS += k[i:i+1]
      } else {
        if currI, err := strconv.Atoi(currS); err == nil {
          match = append(match, currI)
        }
        currS = ""
      }
    }
    if currI, err := strconv.Atoi(currS); err == nil {
      match = append(match, currI)
    }
    ans = append(ans, match)
  }
  return ans
}