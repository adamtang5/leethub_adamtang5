func maximalRectangle(matrix [][]byte) int {
  h, v := make([][]int, len(matrix)), make([][]int, len(matrix))
  for i := 0; i < len(matrix); i++ {
    h[i] = make([]int, len(matrix[0]))
    v[i] = make([]int, len(matrix[0]))
  }

  for r := 0; r < len(matrix); r++ {
    for c := 0; c < len(matrix[0]); c++ {
      i, err := strconv.Atoi(string(matrix[r][c]))
      if err == nil {
        h[r][c] = i
      }
      i, err = strconv.Atoi(string(matrix[r][c]))
      if err == nil {
        v[r][c] = i
      }
    }
  }

  for r := 0; r < len(matrix); r++ {
    for c := len(matrix[0]) - 2; c >= 0; c-- {
      if h[r][c] > 0 {
        h[r][c] = h[r][c + 1] + 1
      }
    }
  }

  for c := 0; c < len(matrix[0]); c++ {
    for r := len(matrix) - 2; r >= 0; r-- {
      if v[r][c] > 0 {
        v[r][c] = v[r + 1][c] + 1
      }
    }
  }

  ans, ht, wd, thSet := 0, 0, 0, make(map[int]bool)
  for r := 0; r < len(matrix); r++ {
    for c := 0; c < len(matrix[0]); c++ {
      thSet = make(map[int]bool)
      if h[r][c] > 0 && v[r][c] > 0 {
        for j := 0; j < h[r][c]; j++ {
          thSet[v[r][c + j]] = true
        }
        for th := range thSet {
          wd = 0
          for wd < h[r][c] && v[r][c + wd] >= th {
            wd++
          }
          ans = max(ans, wd * th)
        }
        thSet = make(map[int]bool)
        for i := 0; i < v[r][c]; i++ {
          thSet[h[r + i][c]] = true
        }
        for th := range thSet {
          ht = 0
          for ht < v[r][c] && h[r + ht][c] >= th {
            ht++
          }
          ans = max(ans, ht * th)
        }
        thSet = make(map[int]bool)
      }
    }
  }
  return ans
}