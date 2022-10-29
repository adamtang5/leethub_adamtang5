class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        ROWS, COLS = len(maze), len(maze[0])
        steps = [[float('inf')] * COLS for _ in range(ROWS)]
        steps[entrance[0]][entrance[1]] = 0
        
        def distance(coord1, coord2):
            r1, c1 = coord1
            r2, c2 = coord2
            return abs(r1-r2) + abs(c1-c2)
        
        visited = set()
        visited.add((entrance[0], entrance[1]))
        
        def valid(r, c):
            return r in range(ROWS) and c in range(COLS) and (r, c) not in visited and maze[r][c] != '+'
        
        def isExit(r, c):
            return (r == 0 or r == ROWS-1 or c == 0 or c == COLS-1) and (entrance[0] != r or entrance[1] != c) and maze[r][c] == '.'
        
        queue = [entrance]
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        
        while (queue):
            r, c = queue.pop(0)
            for rd, cd in dirs:
                nr, nc = r+rd, c+cd
                if valid(nr, nc):
                    steps[nr][nc] = min(steps[nr][nc], steps[r][c]+1)
                    visited.add((nr, nc))
                    queue.append([nr, nc])
        
        exits = []
        for r, row in enumerate(maze):
            for c, col in enumerate(row):
                if isExit(r, c):
                    exits.append([r, c])
        
        if not exits:
            return -1
        
        minSteps = min(float('inf'), *[steps[r][c] for r, c in exits])
        return -1 if minSteps == float('inf') else minSteps
            