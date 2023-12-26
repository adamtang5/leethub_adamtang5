# @param {Integer[]} gas
# @param {Integer[]} cost
# @return {Integer}
def can_complete_circuit(gas, cost)
  return -1 if gas.sum-cost.sum < 0
  total = ans = 0
  (0...gas.length).each do |i|
    total += gas[i]-cost[i]
    if total < 0
      total = 0
      ans = i+1
    end
  end
  ans
end