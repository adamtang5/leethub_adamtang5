class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        visited = set()
        def valid(i):
            return i in range(len(arr)) and i not in visited
        
        queue = [start]
        curr = None
        while queue:
            curr = queue.pop(0)
            if arr[curr] == 0:
                return True
            if valid(curr):
                visited.add(curr)
                if valid(curr-arr[curr]):
                    queue.append(curr-arr[curr])
                if valid(curr+arr[curr]):
                    queue.append(curr+arr[curr])
        return False