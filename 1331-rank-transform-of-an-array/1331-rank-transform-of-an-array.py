class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        copy = sorted(list(dict.fromkeys(arr)))
        iMap = dict();
        for i, n in enumerate(copy):
            iMap[str(n)] = iMap.get(str(n), i+1)
        return [iMap.get(str(n)) for n in arr]