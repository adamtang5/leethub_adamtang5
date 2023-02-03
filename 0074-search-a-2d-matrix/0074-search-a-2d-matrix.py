class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        r = 0
        while r < len(matrix)-1:
            if target >= matrix[r+1][0]:
                r += 1
            else:
                break
        if r == len(matrix):
            return False
        for c in range(len(matrix[r])):
            if target == matrix[r][c]:
                return True
            elif target < matrix[r][c]:
                return False
        if target > matrix[r][-1]:
            return False