/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func recoverTree(root *TreeNode)  {
  nodes := []*TreeNode{}
  dfs(root, &nodes)
  vals := []int{}
  for _, node := range nodes {
    vals = append(vals, node.Val)
  }
  sort.Ints(vals)
  for i := 0; i < len(nodes); i++ {
    nodes[i].Val = vals[i]
  }
}

func dfs(node *TreeNode, nodes *[]*TreeNode) {
  if node == nil {
    return
  }
  dfs((*node).Left, nodes)
  *nodes = append(*nodes, node)
  dfs((*node).Right, nodes)
}