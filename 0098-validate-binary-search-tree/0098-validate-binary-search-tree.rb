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
# @return {Boolean}
def valid_node(lb, val, ub)
  return val > lb && val < ub
end

def is_valid_bst(root)
  queue = [[-1/0.0, root, 1/0.0]]
  while queue.length > 0
    lb, curr, ub = queue.shift
    return false if !valid_node(lb, curr.val, ub)
    if curr.left
      queue << [lb, curr.left, curr.val]
    end
    if curr.right
      queue << [curr.val, curr.right, ub]
    end
  end
  return true
end