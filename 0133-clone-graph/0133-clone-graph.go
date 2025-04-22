/**
 * Definition for a Node.
 * type Node struct {
 *   Val int
 *   Neighbors []*Node
 * }
 */

func cloneGraph(node *Node) *Node {
  newGraph, visited := make(map[int]*Node), make(map[int]bool)
  if node == nil {
    return nil
  }
  dfs(node, &newGraph, &visited)
  return newGraph[1]
}

func dfs(node *Node, newGraph *map[int]*Node, visited *map[int]bool)  {
  (*visited)[(*node).Val] = true
  if _, ok := (*newGraph)[(*node).Val]; !ok {
    (*newGraph)[(*node).Val] = &Node{
      Val: (*node).Val,
    }
  }
  for _, nb := range (*node).Neighbors {
    if _, ok := (*newGraph)[(*nb).Val]; !ok {
      (*newGraph)[(*nb).Val] = &Node{
        Val: (*nb).Val,
      }
    }
    if !slices.Contains((*(*newGraph)[(*node).Val]).Neighbors, (*newGraph)[(*nb).Val]) {
      (*(*newGraph)[(*node).Val]).Neighbors = append((*(*newGraph)[(*node).Val]).Neighbors, (*newGraph)[(*nb).Val])
    }
    if _, ok := (*visited)[(*nb).Val]; !ok {
      dfs(nb, newGraph, visited)
    }
  }
}