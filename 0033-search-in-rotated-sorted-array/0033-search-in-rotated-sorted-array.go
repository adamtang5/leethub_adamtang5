func search(nums []int, target int) int {
  l, r, maxIdx := 0, len(nums)-1, 0
  if nums[l] < nums[r] {
    maxIdx = r
  } else {
    maxIdx = (r+l)/2
    for l <= r && maxIdx < len(nums)-1 && nums[maxIdx+1] > nums[maxIdx] {
      if nums[maxIdx] > nums[0] {
        l = maxIdx+1
      } else if nums[maxIdx] < nums[0] {
        r = maxIdx-1
      } else {
        l++
      }
      maxIdx = (r+l)/2
    }
  }
  
  if maxIdx < len(nums)-1 {
    if target > nums[0] {
      l, r = 0, maxIdx
    } else if target < nums[0] {
      l, r = maxIdx+1, len(nums)-1
    } else {
      return 0
    }
  }
  
  pivot := (r+l)/2
  for l <= r && pivot >= 0 && pivot < len(nums) && nums[pivot] != target {
    if nums[pivot] > target {
      r = pivot-1
    } else if nums[pivot] < target {
      l = pivot+1
    }
    pivot = (r+l)/2
  }
  
  if l > r {
    return -1
  }
  if nums[pivot] == target {
    return pivot
  }
  return 0
}