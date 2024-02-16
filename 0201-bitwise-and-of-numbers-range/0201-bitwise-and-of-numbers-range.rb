# @param {Integer} left
# @param {Integer} right
# @return {Integer}
POWERS, p = [0], 1
while p <= 2147483647
  POWERS << p
  p *= 2
end

def range_bitwise_and(left, right)
  return 0 if left == 0
  l_idx, r_idx, i = -1, -1, 0
  while i < POWERS.length
    l_idx += 1 if left >= POWERS[i]
    r_idx += 1 if right >= POWERS[i]
    i += 1
  end
  return 0 if l_idx != r_idx
  base = POWERS[l_idx]
  base+range_bitwise_and(left-base, right-base)
end