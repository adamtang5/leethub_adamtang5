class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for i in range(len(strs)):
            key = [ord(ch) - ord('a') for ch in strs[i]]
            key.sort()
            key = str(key)

            groups[key] = groups.get(key, [])
            groups[key].append(strs[i])
        return groups.values()
