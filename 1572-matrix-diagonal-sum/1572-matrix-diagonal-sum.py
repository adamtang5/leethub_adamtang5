class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        ans, n = 0, len(mat)
        for i in range(n):
            ans += mat[i][i]
            ans += mat[n-i-1][i]
        if n % 2:
            ans -= mat[(n-1)//2][(n-1)//2]
        return ans