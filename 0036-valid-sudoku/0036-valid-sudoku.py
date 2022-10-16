class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        def check9(arr):
            arr = [cell for cell in arr if cell != '.']
            arr.sort()
            
            for i in range(1, len(arr)):
                if arr[i-1] == arr[i]:
                    return False
            return True
        
        def checkRows():
            for i in range(9):
                if not check9(board[i]):
                    return False
            return True
        
        def checkCols():
            for i in range(9):
                if not check9([row[i] for row in board]):
                    return False
            return True
        
        def checkGrids():
            def getGrid(r, c):
                ans = []
                for i in range(3):
                    for j in range(3):
                        ans.append(board[r+i][c+j])
                return ans
            
            for r in range(0, 9, 3):
                for c in range(0, 9, 3):
                    if not check9(getGrid(r, c)):
                        return False
            return True
        
        return checkRows() and checkCols() and checkGrids()