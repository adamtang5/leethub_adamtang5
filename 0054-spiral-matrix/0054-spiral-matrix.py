class MatrixState:
    def __init__(self, m, n):
        self.rlb = 0
        self.rub = m-1
        self.clb = 0
        self.cub = n-1
        self.order = []
        
    def goRight(self, matrix):
        for i in range(self.clb, self.cub+1):
            self.order.append(matrix[self.rlb][i])
        self.rlb += 1
        
    def goDown(self, matrix):
        for i in range(self.rlb, self.rub+1):
            self.order.append(matrix[i][self.cub])
        self.cub -= 1
        
    def goLeft(self, matrix):
        for i in range(self.cub, self.clb-1, -1):
            self.order.append(matrix[self.rub][i])
        self.rub -= 1
        
    def goUp(self, matrix):
        for i in range(self.rub, self.rlb-1, -1):
            self.order.append(matrix[i][self.clb])
        self.clb += 1
    
    def walk(self, matrix):
        moveSeq = [self.goRight, self.goDown, self.goLeft, self.goUp]
        moveIdx = 0
        while self.rub >= self.rlb and self.cub >= self.clb:
            moveSeq[moveIdx % len(moveSeq)](matrix)
            moveIdx += 1

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m, n = len(matrix), len(matrix[0])
        state = MatrixState(m, n)
        state.walk(matrix)
        return state.order
            