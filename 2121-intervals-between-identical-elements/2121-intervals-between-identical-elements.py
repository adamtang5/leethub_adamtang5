class Solution:
    def getDistances(self, arr: List[int]) -> List[int]:
        buckets = collections.defaultdict(list)
        for i, el in enumerate(arr):
            buckets[el].append(i)
        ans = [0] * len(arr)
        for el in buckets.keys():
            indices = buckets[el]
            l, r, total = 0, len(indices)-1, 0
            for i in indices:
                total += i - indices[0]
            ans[indices[0]] = total
            
            for i in range(1, len(indices)):
                weight = l - r + 1
                total += (indices[i] - indices[i-1]) * weight
                l += 1
                r -= 1
                ans[indices[i]] = total
        return ans