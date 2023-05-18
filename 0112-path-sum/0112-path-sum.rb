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
# @param {Integer} target_sum
# @return {Boolean}
def has_path_sum(root, target_sum)
  queue = root ? [[root.val, root]] : []
  while queue.length > 0
    sum, node = queue.shift
    return true if !node.left && !node.right && sum == target_sum
    queue << [sum+node.left.val, node.left] if node.left
    queue << [sum+node.right.val, node.right] if node.right
  end
  false
end