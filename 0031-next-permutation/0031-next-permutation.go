func bubbleSort(start int, nums []int)  {
  for i:=0;i<len(nums);i++ {
    for j:=start;j<len(nums)-i-1;j++ {
      if nums[j] > nums[j+1] {
        nums[j], nums[j+1] = nums[j+1], nums[j]
      }
    }
  }
}

func nextPermutation(nums []int)  {
  if len(nums) == 1 {
    return
  }
  l, r := len(nums)-2, len(nums)-1
  if nums[l] < nums[r] {
    nums[l], nums[r] = nums[r], nums[l]
    return
  } else {
    end := len(nums)-1
    for l >= 0 && nums[l] >= nums[r] {
      l--
      r--
    }
    if l < 0 {
      bubbleSort(0, nums)
      return
    }
    for nums[end] <= nums[l] {
      end--
    }
    nums[l], nums[end] = nums[end], nums[l]
    bubbleSort(l+1, nums)
    return
  }
}