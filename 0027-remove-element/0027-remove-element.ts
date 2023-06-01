function removeElement(nums: number[], val: number): number {
  let [ahead, behind] = [0, 0]
  while (ahead < nums.length) {
    while (ahead < nums.length && nums[ahead] === val) ahead++
    while (ahead < nums.length && nums[ahead] !== val) {
      nums[behind] = nums[ahead]
      behind++
      ahead++
    }
  }
  return behind
}