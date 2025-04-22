func minCut(s string) int {
  adj := make(map[int]*map[int]bool)
  for i := 0; i < len(s); i++ {
    for j := i; j < len(s) && j <= i + 1; j++ {
      l, r := i, j
      for inbound(l, s) && inbound(r, s) && s[l] == s[r] {
        if _, ok := adj[l]; !ok {
          temp := make(map[int]bool)
          adj[l] = &temp
        }
        (*adj[l])[r + 1] = true
        l, r = l - 1, r + 1
      }
    }
  }

  pathQ, visited := [][]int{[]int{0}}, make(map[int]bool)
  visited[0] = true
  var currPath []int
  currNode, ans := 0, 0
  for len(pathQ) > 0 {
    currPath = pathQ[0]
    pathQ = pathQ[1:]
    currNode = currPath[len(currPath) - 1]
    if currNode == len(s) {
      ans = len(currPath) - 2
      break
    }
    for nb := range *adj[currNode] {
      if _, ok := visited[nb]; !ok {
        visited[nb] = true
        clone := []int{}
        for _, el := range currPath {
          clone = append(clone, el)
        }
        clone = append(clone, nb)
        pathQ = append(pathQ, clone)
      }
    }
  }

  return ans
}

func inbound(i int, s string) bool {
  return i >= 0 && i < len(s)
}