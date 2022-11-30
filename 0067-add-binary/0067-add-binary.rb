# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    a.reverse!
    b.reverse!
    carry, l, r = 0, 0, 0
    ans = ''
    
    (0...[a.length, b.length].max).each do |i|
        l = i < a.length ? a[i].to_i : 0
        r = i < b.length ? b[i].to_i : 0
        ans += (l^r^carry).to_s
        carry = l&r | l&carry | r&carry
    end
    if carry > 0
        ans += carry.to_s
    end
    return ans.reverse
end