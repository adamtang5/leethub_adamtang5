class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        paths = []
        
        def dfs(node, path):
            if node == len(graph)-1:
                paths.append(path+[node])
                return
            if len(graph[node]) == 0:
                return
            
            for nextNode in graph[node]:
                dfs(nextNode, path+[node])
        
        dfs(0, [])
        return paths