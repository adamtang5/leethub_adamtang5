class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        if num[-1]+k < 10:
            num[-1] += k
            return num
        else:
            rev = num[::-1]
            for i, s in enumerate(str(k)[::-1]):
                if i not in range(len(rev)):
                    rev.insert(i, 0)
                rev[i] += int(s)
            i, carry = 0, 0
            while i < len(rev):
                rev[i] += carry
                if rev[i] > 9:
                    carry = rev[i] // 10
                    rev[i] %= 10
                else:
                    carry = 0
                i += 1
            if carry:
                rev.append(carry)
            return rev[::-1]