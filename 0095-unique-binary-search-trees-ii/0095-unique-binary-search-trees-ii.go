/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func generateTrees(n int) []*TreeNode {
  dp := make(map[string][]*TreeNode)
  helper(1, n, &dp)
  return dp["1-" + strconv.Itoa(n)]
}

func helper(lb int, ub int, dp *map[string][]*TreeNode)  {
  trees, key := []*TreeNode{}, ""
  if lb == ub {
    key = strconv.Itoa(lb) + "-" + strconv.Itoa(ub)
    if _, ok := (*dp)[key]; !ok {
      trees = append(trees, &TreeNode{
        Val: lb,
        Left: nil,
        Right: nil,
      })
      (*dp)[key] = trees
    }
  } else {
    for rootVal := lb; rootVal <= ub; rootVal++ {
      helper(lb, rootVal - 1, dp)
      helper(rootVal + 1, ub, dp)
      var leftTrees, rightTrees []*TreeNode
      if v, ok := (*dp)[strconv.Itoa(lb) + "-" + strconv.Itoa(rootVal - 1)]; ok {
        leftTrees = v
      }
      if v, ok := (*dp)[strconv.Itoa(rootVal + 1) + "-" + strconv.Itoa(ub)]; ok {
        rightTrees = v
      }
      if rootVal == ub {
        for _, leftTree := range leftTrees {
          trees = append(trees, &TreeNode{
            Val: rootVal,
            Left: leftTree,
            Right: nil,
          })
        }
      } else if rootVal == lb {
        for _, rightTree := range rightTrees {
          trees = append(trees, &TreeNode{
            Val: rootVal,
            Left: nil,
            Right: rightTree,
          })
        }
      } else {
        for _, leftTree := range leftTrees {
          for _, rightTree := range rightTrees {
            trees = append(trees, &TreeNode{
              Val: rootVal,
              Left: leftTree,
              Right: rightTree,
            })
          }
        }
      }
    }
    if lb <= ub {
      key = strconv.Itoa(lb) + "-" + strconv.Itoa(ub)
      if _, ok := (*dp)[key]; !ok {
        (*dp)[key] = trees
      }
    }
  }
}