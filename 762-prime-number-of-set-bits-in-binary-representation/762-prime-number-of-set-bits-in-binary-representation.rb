# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def count_prime_set_bits(left, right)
    count = 0
    primes = Set[2, 3, 5, 7, 11, 13, 17, 19]
    (left..right).each do |i|
        bits = i.to_s(2).split('').filter{ |d| d == '1' }.length
        if primes.include?(bits)
            count += 1
        end
    end
    return count
end