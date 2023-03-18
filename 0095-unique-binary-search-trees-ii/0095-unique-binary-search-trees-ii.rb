# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {Integer} n
# @return {TreeNode[]}
def helper(lb, ub, dp)
  if lb == ub
    dp["#{lb}-#{ub}"] = dp["#{lb}-#{ub}"] || [TreeNode.new(lb)]
  else
    trees = []
    (lb..ub).each do |root_val|
      helper(lb, root_val-1, dp)
      helper(root_val+1, ub, dp)
      if root_val == ub
        dp["#{lb}-#{root_val-1}"].each{ |left_tree| trees << TreeNode.new(root_val, left_tree, nil) }
      elsif root_val == lb
        dp["#{root_val+1}-#{ub}"].each{ |right_tree| trees << TreeNode.new(root_val, nil, right_tree) }
      else
        dp["#{lb}-#{root_val-1}"].each do |left_tree|
          dp["#{root_val+1}-#{ub}"].each do |right_tree|
            trees << TreeNode.new(root_val, left_tree, right_tree)
          end
        end
      end
    end
    if lb <= ub
      dp["#{lb}-#{ub}"] = dp["#{lb}-#{ub}"] || trees
    end
  end
end

def generate_trees(n)
  dp = Hash.new()
  helper(1, n, dp)
  return dp["1-#{n}"]
end