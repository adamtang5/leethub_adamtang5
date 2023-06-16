function search(nums: number[], target: number): number {
  let [l, r] = [0, nums.length - 1]
  let maxIdx: number
  if (nums[l] < nums[r]) {
    maxIdx = r
  } else {
    maxIdx = Math.floor((r + l) / 2)
    while (l <= r && nums[maxIdx + 1] > nums[maxIdx]) {
      if (nums[maxIdx] > nums[0]) {
        l = maxIdx + 1
      } else if (nums[maxIdx] < nums[0]) {
        r = maxIdx - 1
      } else {
        l++
      }
      maxIdx = Math.floor((r + l) / 2)
    }
  }
  
  if (maxIdx < nums.length - 1) {
    if (target > nums[0]) {
      [l, r] = [0, maxIdx]
    } else if (target < nums[0]) {
      [l, r] = [maxIdx + 1, nums.length - 1]
    } else {
      return 0
    }
  }
  
  let pivot = Math.floor((r + l) / 2)
  while (l <= r && pivot >= 0 && pivot < nums.length && nums[pivot] !== target) {
    if (nums[pivot] > target) {
      r = pivot - 1
    } else if (nums[pivot] < target) {
      l = pivot + 1
    }
    pivot = Math.floor((r + l) / 2)
  }
  if (l > r) return -1
  if (nums[pivot] === target) return pivot
}