func searchInsert(nums []int, target int) int {
  if target < nums[0] {
    return 0
  }
  if target > nums[len(nums)-1] {
    return len(nums)
  }
  l, r := 0, len(nums)-1
  pivot := (r+l)/2
  for pivot>=0 && pivot+1<len(nums) && (nums[pivot]>target || nums[pivot+1]<=target) {
    if nums[pivot] > target {
      r = pivot-1
    } else {
      l = pivot+1
    }
    pivot = (r+l)/2
  }
  if nums[pivot] == target {
    return pivot
  } else {
    return pivot+1
  }
}