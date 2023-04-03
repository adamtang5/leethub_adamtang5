# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
  a, b = nums1, nums2
  if nums1.length > nums2.length
    b, a = a, b
  end
  total_len = a.length + b.length
  half = total_len / 2
  l, r = 0, a.length-1
  a_pointer = b_pointer = a_left = a_right = b_left = b_right = nil
  while true
    a_pointer = (l+r)/2
    b_pointer = half-a_pointer-2
    a_left = a_pointer >= 0 ? a[a_pointer] : -1/0.0
    a_right = a_pointer+1 < a.length ? a[a_pointer+1] : 1/0.0
    b_left = b_pointer >= 0 ? b[b_pointer] : -1/0.0
    b_right = b_pointer+1 < b.length ? b[b_pointer+1] : 1/0.0
    
    if a_left <= b_right && b_left <= a_right
      if total_len.odd?
        return [a_right, b_right].min
      else
        return ([a_left, b_left].max + [a_right, b_right].min) / 2.0
      end
    elsif a_left > b_right
      r = a_pointer-1
    else
      l = a_pointer+1
    end
  end
end