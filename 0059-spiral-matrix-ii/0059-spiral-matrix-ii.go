type matrixState struct {
  rlb int
  rub int
  clb int
  cub int
  curr int
  cells int
  matrix [][]int
}

func generateMatrix(n int) [][]int {
  matrix := make([][]int, n)
  for i := range matrix {
    matrix[i] = make([]int, n)
  }

  ms := matrixState{
    rlb: 0,
    rub: n - 1,
    clb: 0,
    cub: n - 1,
    curr: 1,
    cells: n * n,
  }

  goRight := func() {
    for i:=ms.clb;i<=ms.cub;i++ {
      matrix[ms.rlb][i] = ms.curr
      ms.curr++
    }
    ms.rlb++
  }

  goDown := func() {
    for i:=ms.rlb;i<=ms.rub;i++ {
      matrix[i][ms.cub] = ms.curr
      ms.curr++
    }
    ms.cub--
  }

  goLeft := func() {
    for i:=ms.cub;i>=ms.clb;i-- {
      matrix[ms.rub][i] = ms.curr
      ms.curr++
    }
    ms.rub--
  }

  goUp := func() {
    for i:=ms.rub;i>=ms.rlb;i-- {
      matrix[i][ms.clb] = ms.curr
      ms.curr++
    }
    ms.clb++
  }

  i := 0
  for ms.curr <= ms.cells {
    switch i % 4 {
    case 0:
      goRight()
    case 1:
      goDown()
    case 2:
      goLeft()
    case 3:
      goUp()
    }
    i++
  }

  return matrix
}
