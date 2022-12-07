class Solution:
    def compress(self, chars: List[str]) -> int:
        currCh, currLen, currLenStr, start, i, j = chars[0], 1, '', 0, 1, 0
        while i < len(chars):
            if chars[i] == currCh:
                currLen += 1
            else:
                j = 0
                if currLen > 1:
                    currLenStr = str(currLen)
                    while j < len(currLenStr):
                        chars[start+1+j] = currLenStr[j]
                        j += 1
                start += 1+j
                chars[start] = chars[i]
                currCh = chars[start]
                currLen = 1
            i += 1
        j = 0
        if currLen > 1:
            currLenStr = str(currLen)
            while j < len(currLenStr):
                chars[start+1+j] = currLenStr[j]
                j += 1
        return start+1+j