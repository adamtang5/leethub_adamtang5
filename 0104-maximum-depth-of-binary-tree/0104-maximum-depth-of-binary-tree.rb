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
def max_depth(root)
  return 0 if !root
  depth = 0
  levels = Hash.new{ |h, k| h[k] = Array.new }
  levels[depth] = [root]
  while levels[depth].length > 0
    levels[depth].each do |node|
      if node.left
        levels[depth+1] << node.left
      end
      if node.right
        levels[depth+1] << node.right
      end
    end
    depth += 1
  end
  return depth
end