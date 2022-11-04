# @param {Integer[]} time
# @return {Integer}
def rr(n)
    return n * (n-1) / 2
end

def num_pairs_divisible_by60(time)
    counts = [0] * 60
    time.each { |min| counts[min%60] += 1 }
    
    num_pairs = rr(counts[0]) + rr(counts[30])
    
    (1...30).each { |i| num_pairs += counts[i]*counts[60-i] }
    
    return num_pairs
end