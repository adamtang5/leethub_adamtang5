func setZeroes(matrix [][]int)  {
  type IntSet map[int]bool
  newIntSet := func() IntSet {
    return make(IntSet)
  }
  rSet, cSet := newIntSet(), newIntSet()
  for r:=0;r<len(matrix);r++ {
    for c:=0;c<len(matrix[0]);c++ {
      if matrix[r][c] == 0 {
        rSet[r], cSet[c] = true, true
      }
    }
  }

  for r := range rSet {
    for c:=0;c<len(matrix[0]);c++ {
      matrix[r][c] = 0
    }
  }
  for c := range cSet {
    for r:=0;r<len(matrix);r++ {
      matrix[r][c] = 0
    }
  }
}