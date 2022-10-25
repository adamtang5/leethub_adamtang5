# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def max_subsequence(nums, k)
    enum = nums.map.with_index { |n, i| [i, n] }
    enum.sort_by!{ |a| a[1] }.reverse!
    enum = enum.take_while.with_index{ |el, i| i < k }
    enum.sort_by!{ |a| a[0] }
    return enum.map{ |a| a[1] }
end