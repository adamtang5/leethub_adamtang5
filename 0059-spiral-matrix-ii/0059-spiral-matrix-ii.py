class MatrixState:
    def __init__(self, n):
        self.rlb = 0
        self.rub = n-1
        self.clb = 0
        self.cub = n-1
        self.curr = 1

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[None] * n for _ in range(n)]
        state = MatrixState(n)
        moveIdx = 0
        
        def goRight(state):
            for i in range(state.clb, state.cub+1):
                matrix[state.rlb][i] = state.curr
                state.curr += 1
            state.rlb += 1
        
        def goDown(state):
            for i in range(state.rlb, state.rub+1):
                matrix[i][state.cub] = state.curr
                state.curr += 1
            state.cub -= 1
            
        def goLeft(state):
            for i in range(state.cub, state.clb-1, -1):
                matrix[state.rub][i] = state.curr
                state.curr += 1
            state.rub -= 1
            
        def goUp(state):
            for i in range(state.rub, state.rlb-1, -1):
                matrix[i][state.clb] = state.curr
                state.curr += 1
            state.clb += 1
            
        moveSeq = [goRight, goDown, goLeft, goUp]
        
        while state.curr <= n*n:
            moveSeq[moveIdx%len(moveSeq)](state)
            moveIdx += 1
            
        return matrix