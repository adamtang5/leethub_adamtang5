# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    if digits[-1] < 9
        digits[-1] += 1
        return digits
    else
        digits.reverse!
        i, carry = 0, 1
        while i < digits.length
            if digits[i]+carry > 9
                digits[i] = 0
                i += 1
            else
                digits[i] += carry
                carry = 0
                break
            end
        end
        if carry == 1
            digits << carry
        end
        return digits.reverse!
    end
end