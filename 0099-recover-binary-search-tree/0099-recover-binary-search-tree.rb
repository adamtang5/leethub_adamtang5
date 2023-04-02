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
# @return {Void} Do not return anything, modify root in-place instead.
def dfs(node, nodes)
  return if node == nil
  dfs(node.left, nodes)
  nodes << node
  dfs(node.right, nodes)
end

def recover_tree(root)
  nodes = []
  dfs(root, nodes)
  vals = nodes.map{ |node| node.val }
  vals.sort!
  nodes.each_with_index{ |node, i| node.val = vals[i] }
end