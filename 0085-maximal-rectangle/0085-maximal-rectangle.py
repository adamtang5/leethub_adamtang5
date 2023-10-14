class Solution:
  def maximalRectangle(self, matrix: List[List[str]]) -> int:
    h = [[int(cell) for cell in row] for row in matrix]
    v = [[int(cell) for cell in row] for row in matrix]
    for r in range(len(matrix)):
      for c in range(len(matrix[0])-2, -1, -1):
        if h[r][c]:
          h[r][c] = h[r][c+1]+1
    for c in range(len(matrix[0])):
      for r in range(len(matrix)-2, -1, -1):
        if v[r][c]:
          v[r][c] = v[r+1][c]+1
    ans = ht = wd = 0
    thSet = set()
    for r in range(len(matrix)):
      for c in range(len(matrix[0])):
        thSet.clear()
        if h[r][c] and v[r][c]:
          for j in range(h[r][c]):
            thSet.add(v[r][c+j])
          for th in thSet:
            wd = 0
            while wd < h[r][c] and v[r][c+wd] >= th:
              wd += 1
            ans = max(ans, wd*th)
          thSet.clear()
          for i in range(v[r][c]):
            thSet.add(h[r+i][c])
          for th in thSet:
            ht = 0
            while ht < v[r][c] and h[r+ht][c] >= th:
              ht += 1
            ans = max(ans, ht*th)
          thSet.clear()
    return ans