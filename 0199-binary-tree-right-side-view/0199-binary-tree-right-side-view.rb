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
# @return {Integer[]}
def right_side_view(root)
  levels = root ? [[root]] : [[]]
  while !levels[-1].empty?
    levels << []
    next_level = levels[-1]
    levels[-2].each do |node|
      next_level << node.left if node.left
      next_level << node.right if node.right
    end
  end
  levels.pop if levels[-1].empty?
  levels.map{ |level| level[-1].val }
end