function searchRange(nums: number[], target: number): number[] {
  let [l, r] = [0, nums.length - 1]
  let pivot = Math.floor((r + l) / 2)
  while (l <= r) {
    if (nums[pivot] !== target) {
      if (nums[pivot] > target) {
        r = pivot - 1
      } else {
        l = pivot + 1
      }
      pivot = Math.floor((r + l) / 2)
    } else {
      [l, r] = [pivot, pivot]
      while (nums[l] === target) l--
      while (nums[r] === target) r++
      return [l + 1, r - 1]
    }
  }
  return [-1, -1]
}