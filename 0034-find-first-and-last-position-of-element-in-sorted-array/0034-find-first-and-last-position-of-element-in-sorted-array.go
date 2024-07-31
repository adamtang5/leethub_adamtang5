func searchRange(nums []int, target int) []int {
  l, r := 0, len(nums)-1
  pivot := (r+l)/2
  
  for l <= r {
    if nums[pivot] != target {
      if nums[pivot] > target {
        r = pivot-1
      } else {
        l = pivot+1
      }
      pivot = (r+l)/2
    } else {
      l, r = pivot, pivot
      for l >= 0 && nums[l] == target {
        l--
      }
      for r < len(nums) && nums[r] == target {
        r++
      }
      return []int{l+1, r-1}
    }
  }
  return []int{-1, -1}
}