class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rlb, rub, clb, cub = 0, len(matrix)-1, 0, len(matrix[0])-1
        for i in range(len(matrix[0])):
            if target < matrix[0][i]:
                cub = i-1
                break
        for i in range(len(matrix)):
            if target < matrix[i][0]:
                rub = i-1
                break
        for i in range(rub, -1, -1):
            if target > matrix[i][cub]:
                rlb = i+1
                break
        for i in range(cub, -1, -1):
            if target > matrix[rub][i]:
                clb = i+1
                break

        left = right = pivot = None
        for r in range(rlb, rub+1):
            if target in range(matrix[r][clb], matrix[r][cub]+1):
                left, right = clb, cub
                while left <= right:
                    pivot = (left+right) // 2
                    if target == matrix[r][pivot]:
                        return True
                    elif target < matrix[r][pivot]:
                        right = pivot-1
                    elif target > matrix[r][pivot]:
                        left = pivot+1
        return False