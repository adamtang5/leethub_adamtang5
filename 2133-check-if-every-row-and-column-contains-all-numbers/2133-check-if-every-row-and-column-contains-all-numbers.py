class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        def checkSingle(row):
            tally = [0] * len(row)
            for i in range(len(row)):
                if tally[row[i]-1] > 0:
                    return False
                else:
                    tally[row[i]-1] += 1
            return True
        
        for r in range(len(matrix)):
            if not checkSingle(matrix[r]):
                return False
        
        for c in range(len(matrix)):
            if not checkSingle([r[c] for r in matrix]):
                return False
        return True