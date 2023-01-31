class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows, cols = set(), set()
        for r, row in enumerate(matrix):
            for c, cell in enumerate(row):
                if cell == 0:
                    rows.add(r)
                    cols.add(c)
        
        for r in list(rows):
            for c in range(len(matrix[0])):
                matrix[r][c] = 0
        for c in list(cols):
            for r in range(len(matrix)):
                matrix[r][c] = 0