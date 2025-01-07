func plusOne(digits []int) []int {
  if digits[len(digits) - 1] < 9 {
    digits[len(digits) - 1]++
  } else {
    l, r := 0, len(digits) - 1
    for l < r {
      digits[l], digits[r] = digits[r], digits[l]
      l++
      r--
    }
    i, carry := 0, 1
    for i < len(digits) {
      if digits[i] + carry > 9 {
        digits[i] = 0
        carry = 1
        i++
      } else {
        digits[i] += carry
        carry = 0
        break
      }
    }
    if carry == 1 {
      digits = append(digits, 1)
    }
    l, r = 0, len(digits) - 1
    for l < r {
      digits[l], digits[r] = digits[r], digits[l]
      l++
      r--
    }
  }
  return digits
}