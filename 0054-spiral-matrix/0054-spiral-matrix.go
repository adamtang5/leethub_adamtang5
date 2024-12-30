type matrixState struct {
  rlb int
  rub int
  clb int
  cub int
  order []int
}

func spiralOrder(matrix [][]int) []int {
  ms := matrixState{
    rlb: 0,
    rub: len(matrix)-1,
    clb: 0,
    cub: len(matrix[0])-1,
    order: []int{},
  }

  goRight := func() {
    for i:=ms.clb;i<=ms.cub;i++ {
      ms.order = append(ms.order, matrix[ms.rlb][i])
    }
    ms.rlb++
  }

  goDown := func() {
    for i:=ms.rlb;i<=ms.rub;i++ {
      ms.order = append(ms.order, matrix[i][ms.cub])
    }
    ms.cub--
  }

  goLeft := func() {
    for i:=ms.cub;i>=ms.clb;i-- {
      ms.order = append(ms.order, matrix[ms.rub][i])
    }
    ms.rub--
  }

  goUp := func() {
    for i:=ms.rub;i>=ms.rlb;i-- {
      ms.order = append(ms.order, matrix[i][ms.clb])
    }
    ms.clb++
  }

  i := 0
  for ms.rub >= ms.rlb && ms.cub >= ms.clb {
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

  return ms.order
}
