class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        pacSet = set()
        atlSet = set()
        visited = set()
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        
        for r in range(m):
            pacSet.add((r, 0))
            atlSet.add((r, n-1))
            
        for c in range(n):
            pacSet.add((0, c))
            atlSet.add((m-1, c))
            
        def inBounds(r, c):
            return r in range(m) and c in range(n)
        
        def valid(sr, sc, dr, dc):
            return (dr, dc) not in visited and inBounds(dr, dc) and heights[sr][sc] <= heights[dr][dc]
        
        def dfs(r, c, ocean):
            if (r, c) not in visited:
                visited.add((r, c))
                for rd, cd in dirs:
                    newR, newC = r+rd, c+cd
                    if valid(r, c, newR, newC):
                        if ocean == 'pac' and (r, c) in pacSet:
                            pacSet.add((newR, newC))
                        elif ocean == 'atl' and (r, c) in atlSet:
                            atlSet.add((newR, newC))
                        dfs(newR, newC, ocean)
                        
        for r, c in list(pacSet):
            dfs(r, c, 'pac')
            
        visited = set()
        
        for r, c in list(atlSet):
            dfs(r, c, 'atl')
            
        intersect = pacSet & atlSet
        return list(intersect)