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
# @return {Float[]}
def average_of_levels(root)
  queue = root ? [[0, root]] : []
  scores = []
  while queue.length > 0
    level, node = queue.shift
    if level > scores.length-1
      scores << []
    end
    scores[level] << node.val
    if node.left
      queue << [level+1, node.left]
    end
    if node.right
      queue << [level+1, node.right]
    end
  end
  return scores.map{ |level| level.sum * 1.0 / level.length }
end