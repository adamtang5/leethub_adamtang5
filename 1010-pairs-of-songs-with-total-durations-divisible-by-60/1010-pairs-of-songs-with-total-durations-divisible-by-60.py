class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        counts = [0] * 60
        numPairs = 0
        
        for min in time:
            counts[min%60] += 1
        
        def rr(n):
            return n*(n-1)//2
        
        numPairs += rr(counts[0])
        numPairs += rr(counts[30])
        
        for i in range(1, 30):
            numPairs += counts[i]*counts[60-i]
        
        return numPairs