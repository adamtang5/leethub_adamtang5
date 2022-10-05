class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        hhLookup = [[] for _ in range(4)]
        mmLookup = [[] for _ in range(6)]
        
        for n in range(60):
            ones = len([d for d in list(format(n, "b")) if d == '1'])
            if n < 12:
                hhLookup[ones].append(n)
            mmLookup[ones].append(n)
        
        def getPairs(total, ub1, ub2):
            return [[l, total-l] for l in range(total+1) if l in range(ub1+1) and total-l in range(ub2+1)]
        
        hmPairs = getPairs(turnedOn, 3, 5)
        
        def validHours(h):
            return str(h)
        
        def validMinutes(m):
            return '0' + str(m) if m < 10 else str(m)
        
        ans = []
        for hKey, mKey in hmPairs:
            for h in hhLookup[hKey]:
                for m in mmLookup[mKey]:
                    ans.append(f'{validHours(h)}:{validMinutes(m)}')
        return ans