func rotate(matrix [][]int)  {
  c := 0
  for w:=len(matrix);w>1;w-=2 {
    c = (len(matrix)-w)/2
    reassign(matrix, w, c)
  }
}

func reassign(m [][]int, w int, c int)  {
  if w == 1 {
    return
  }
  lb, ub := c, c+w-1
  for i:=0;i<w-1;i++ {
    m[lb][lb+i], m[lb+i][ub], m[ub][ub-i], m[ub-i][lb] = m[ub-i][lb], m[lb][lb+i], m[lb+i][ub], m[ub][ub-i]
  }
}