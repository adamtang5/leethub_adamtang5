class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        copy = list(dict.fromkeys(arr))
        copy.sort()
        iMap = dict();
        for i, n in enumerate(copy):
            iMap[str(n)] = iMap.get(str(n), i+1)
        return [iMap.get(str(n)) for n in arr]