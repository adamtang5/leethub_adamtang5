# Definition for a Node.
# class Node
#   attr_accessor :val, :neighbors
#   def initialize(val = 0, neighbors = nil)
#		@val = val
#		neighbors = [] if neighbors.nil?
#     @neighbors = neighbors
#   end
# end

# @param {Node} node
# @return {Node}
def dfs(node, new_graph, visited)
  visited << node.val
  new_graph[node.val].val = node.val
  node.neighbors.each do |nb|
    new_graph[nb.val].val = nb.val
    new_graph[node.val].neighbors << new_graph[nb.val] if !new_graph[node.val].neighbors.include?(new_graph[nb.val])
    dfs(nb, new_graph, visited) if !visited.include?(nb.val)
  end
  nil
end

def cloneGraph(node)
  new_graph, visited = Hash.new{ |h, k| h[k] = Node.new }, Set.new
  return nil if !node
  dfs(node, new_graph, visited)
  new_graph[1]
end