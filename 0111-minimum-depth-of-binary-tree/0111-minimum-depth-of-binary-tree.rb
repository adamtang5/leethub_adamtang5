# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {TreeNode} root
# @return {Integer}
def min_depth(root)
  return 0 if !root
  ans = 1
  levels = Hash.new{ |h, k| h[k] = Array.new }
  levels[ans] << root
  while true
    levels[ans].each do |node|
      return ans if !node.left && !node.right
      if node.left
        levels[ans+1] << node.left
      end
      if node.right
        levels[ans+1] << node.right
      end
    end
    ans += 1
  end
end