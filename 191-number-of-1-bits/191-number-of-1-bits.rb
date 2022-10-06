# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
    count = 0
    while n > 0
        if n % 2 > 0
            count += 1
        end
        n = (n - (n % 2)) / 2
    end
    return count
end