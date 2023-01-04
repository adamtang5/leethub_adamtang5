class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        def reassign(matrix, width, corner):
            lb, ub = corner, corner+width-1
            for i in range(width-1):
                matrix[lb][lb+i], matrix[lb+i][ub], matrix[ub][ub-i], matrix[ub-i][lb] = \
                matrix[ub-i][lb], matrix[lb][lb+i], matrix[lb+i][ub], matrix[ub][ub-i]
        
        for w in range(len(matrix), 1, -2):
            reassign(matrix, w, (len(matrix)-w)//2)