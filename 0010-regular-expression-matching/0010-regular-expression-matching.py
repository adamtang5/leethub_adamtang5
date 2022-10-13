class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        parsed = []
        i = 0
        while i < len(p):
            if i+1 < len(p) and p[i+1] == '*':
                parsed.append(p[i]+p[i+1])
                i += 2
            else:
                parsed.append(p[i])
                i += 1

        def charMatch(ch1, ch2):
            return ch2 == '.' or ch2 == ch1
        
        # base cases
        if len(s) > 0 and len(parsed) == 0:
            return False
        if len(s) == 0 and len(parsed) == 0:
            return True
        if len(s) == 0 and len(parsed) > 0:
            return all([len(el) == 2 for el in parsed])
        
        # recursive steps
        first = parsed.pop(0)
        if len(first) == 1:
            return charMatch(s[0], first) and self.isMatch(s[1:], parsed)
        else:
            if not charMatch(s[0], first[0]):
                return self.isMatch(s, parsed)
            else:
                length = 1
                while length < len(s) and (first[0] == '.' or s[length] == s[0]):
                    length += 1
                boo = False
                for i in range(length+1):
                    boo = boo or self.isMatch(s[i:], parsed)
                return boo