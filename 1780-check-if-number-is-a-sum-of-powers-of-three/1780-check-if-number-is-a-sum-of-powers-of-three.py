class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        powersOf3 = []
        i = 0
        while pow(3, i) <= n:
            powersOf3.append(pow(3, i))
            i += 1
        
        def dfs(arr, target):
            if target == 0:
                return True
            if target < 0 or arr == []:
                return False
            ele = arr.pop()
            return dfs(arr, target-ele) or dfs(arr, target)
        
        return dfs(powersOf3, n)