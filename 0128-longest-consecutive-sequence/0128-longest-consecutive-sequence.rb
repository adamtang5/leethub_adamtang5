# @param {Integer[]} nums
# @return {Integer}
def longest_consecutive(nums)
  neighbor_state = { state: 'Neighbor' }
  tally, ans = Hash.new, 0
  nums.each do |num|
    if !tally.has_key?(num)
      if (!tally.has_key?(num+1) || tally[num+1][:state] == 'Neighbor') && \
          (!tally.has_key?(num-1) || tally[num-1][:state] == 'Neighbor')
        tally[num] = {
          state: 'Present',
          range: {
            lb: num,
            ub: num,
          }
        }
        ans = [ans, 1].max
        tally[num+1] = tally[num-1] = neighbor_state
      end
    elsif tally.has_key?(num) && tally[num][:state] == 'Neighbor'
      tally[num+1] ||= neighbor_state
      tally[num-1] ||= neighbor_state
      l_min = r_max = num
      r_max = tally[num+1][:range][:ub] if tally.has_key?(num+1) && tally[num+1][:state] == 'Present'
      l_min = tally[num-1][:range][:lb] if tally.has_key?(num-1) && tally[num-1][:state] == 'Present'
      new_number_state = {
        state: 'Present',
        range: {
          lb: l_min,
          ub: r_max,
        }
      }
      tally[num] = tally[l_min] = tally[r_max] = new_number_state
      ans = [ans, r_max-l_min+1].max
    end
  end
  ans
end