func abs(x int) int {
  if x < 0 {
    x = -x
  }
  return x
}

func threeSumClosest(nums []int, target int) int {
  sort.Ints(nums)
  optSum, l, r := -100000, 0, 0
  for i:=0;i<len(nums)-2;i++ {
    l, r = i+1, len(nums)-1
    for l < r {
      if abs(nums[i]+nums[l]+nums[r]-target) < abs(optSum-target) {
        optSum = nums[i]+nums[l]+nums[r]
      }
      if nums[i]+nums[l]+nums[r] < target {
        l++
      } else if nums[i]+nums[l]+nums[r] > target {
        r--
      } else {
        return target
      }
    }
  }
  return optSum
}