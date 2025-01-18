func exist(board [][]byte, word string) bool {
  chTally := make(map[byte]int)

  for r := 0; r < len(board); r++ {
    for c := 0; c < len(board[0]); c++ {
      if _, ok := chTally[board[r][c]]; ok {
        chTally[board[r][c]]++
      } else {
        chTally[board[r][c]] = 1
      }
    }
  }

  for i := 0; i < len(word); i++ {
    if tally, ok := chTally[word[i]]; !ok || tally <= 0 {
      return false
    }
    chTally[word[i]]--
  }

  path := make(map[string]bool)
  for r := 0; r < len(board); r++ {
    for c := 0; c < len(board[0]); c++ {
      if dfs(r, c, board, word, 0, &path) {
        return true
      }
    }
  }
  return false
}

func dfs(r int, c int, board [][]byte, word string, i int, path *map[string]bool) bool {
  if i == len(word) {
    return true
  }
  key, ch := strconv.Itoa(r) + "-" + strconv.Itoa(c), word[i]
  _, ok := (*path)[key]
  if r < 0 || r >= len(board) || c < 0 || c >= len(board[0]) || ch != board[r][c] || ok {
    return false
  }
  (*path)[key] = true
  ans := dfs(r + 1, c, board, word, i + 1, path) ||
    dfs(r - 1, c, board, word, i + 1, path) ||
    dfs(r, c + 1, board, word, i + 1, path) ||
    dfs(r, c - 1, board, word, i + 1, path)
  delete(*path, key)
  return ans
}