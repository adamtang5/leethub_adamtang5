# @param {String} num1
# @param {String} num2
# @return {String}
def add_strings(num1, num2)
    rev1 = num1.reverse!.split("").map{ |d| d.to_i }
    rev2 = num2.reverse!.split("").map{ |d| d.to_i }
    digits = []
    (0...[rev1.length, rev2.length].max).each do |i|
        digits << (i < rev1.length ? rev1[i] : 0) + (i < rev2.length ? rev2[i] : 0)
    end
    i, carry = 0, 0
    while i < digits.length
        digits[i] += carry
        carry = digits[i] / 10
        digits[i] %= 10
        i += 1
    end
    if carry > 0
        digits << carry
    end
    return digits.reverse!.map(&:to_s).join("")
end