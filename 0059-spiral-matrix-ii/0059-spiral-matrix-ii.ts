function generateMatrix(n: number): number[][] {
  const matrix: number[][] = new Array(n).fill([]).map(() => new Array(n).fill(0))
  let [rlb, rub, clb, cub, curr, moveIdx] = [0, n - 1, 0, n - 1, 1, 0]
  
  function goRight(): void {
    for (let i = clb; i <= cub; i++) {
      matrix[rlb][i] = curr
      curr++
    }
    rlb++
  }
  function goDown(): void {
    for (let i = rlb; i <= rub; i++) {
      matrix[i][cub] = curr
      curr++
    }
    cub--
  }
  function goLeft(): void {
    for (let i = cub; i >= clb; i--) {
      matrix[rub][i] = curr
      curr++
    }
    rub--
  }
  function goUp(): void {
    for (let i = rub; i >= rlb; i--) {
      matrix[i][clb] = curr
      curr++
    }
    clb++
  }
  
  const moveSeq: Function[] = [goRight, goDown, goLeft, goUp]
  
  while (curr <= n * n) {
    moveSeq[moveIdx % 4]()
    moveIdx++
  }
  
  return matrix
}