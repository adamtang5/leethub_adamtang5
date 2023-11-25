# @param {Integer[]} nums
# @return {Integer}
def longest_consecutive(nums)
  edge, occurred, ans = Set.new, Hash.new, 0
  nums.each do |num|
    if !edge.include?(num) && !occurred.has_key?(num)
      if !occurred.has_key?(num+1) && !occurred.has_key?(num-1)
        occurred[num] = {
          lb: num,
          ub: num,
        }
        ans = [ans, 1].max
        edge << num+1
        edge << num-1
      end
    elsif edge.include?(num)
      edge << num+1 if !occurred.include?(num+1)
      edge << num-1 if !occurred.include?(num-1)
      l_min = r_max = num
      r_max = occurred[num+1][:ub] if occurred.has_key?(num+1)
      l_min = occurred[num-1][:lb] if occurred.has_key?(num-1)
      new_state = {
        lb: l_min,
        ub: r_max,
      }
      occurred[num] = occurred[l_min] = occurred[r_max] = new_state
      edge.delete(num)
      ans = [ans, r_max-l_min+1].max
    end
  end
  ans
end