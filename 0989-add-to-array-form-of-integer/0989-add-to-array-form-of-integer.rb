# @param {Integer[]} num
# @param {Integer} k
# @return {Integer[]}
def add_to_array_form(num, k)
    if num[-1]+k < 10
        num[-1] += k
        return num
    else
        num.reverse!
        k.to_s.reverse.each_char.with_index do |s, i|
            num[i] = num[i] || 0
            num[i] += s.to_i
        end
        i, carry = 0, 0
        while i < num.length
            num[i] += carry
            if num[i] > 9
                carry = num[i] / 10
                num[i] %= 10
            else
                carry = 0
            end
            i += 1
        end
        if carry > 0
            num << carry
        end
        num.reverse!
        return num
    end
end