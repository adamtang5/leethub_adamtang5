# @param {Integer} n
# @return {Boolean}
def has_alternating_bits(n)
    bits = n.to_s(2)
    (0...bits.length-1).each do |i|
        if bits[i] == bits[i+1]
            return false
        end
    end
    return true
end