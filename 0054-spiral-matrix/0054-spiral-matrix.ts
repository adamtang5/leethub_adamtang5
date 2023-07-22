function spiralOrder(matrix: number[][]): number[] {
  let [rlb, rub, clb, cub] = [0, matrix.length - 1, 0, matrix[0].length - 1]
  const ans: number[] = []
  
  function goRight(): void {
    for (let i = clb; i <= cub; i++) {
      ans.push(matrix[rlb][i])
    }
    rlb++
  }
  function goDown(): void {
    for (let i = rlb; i <= rub; i++) {
      ans.push(matrix[i][cub])
    }
    cub--
  }
  function goLeft(): void {
    for (let i = cub; i >= clb; i--) {
      ans.push(matrix[rub][i])
    }
    rub--
  }
  function goUp(): void {
    for (let i = rub; i >= rlb; i--) {
      ans.push(matrix[i][clb])
    }
    clb++
  }
  
  const moveSeq: Function[] = [goRight, goDown, goLeft, goUp]
  
  let moveIdx = 0
  while (rub >= rlb && cub >= clb) {
    moveSeq[moveIdx % moveSeq.length]()
    moveIdx++
  }
  
  return ans
}
