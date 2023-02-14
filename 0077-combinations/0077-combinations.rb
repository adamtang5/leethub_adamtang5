# @param {Integer} n
# @param {Integer} k
# @return {Integer[][]}
def invert(combo, n)
    ans = []
    (1..n).each do |i|
        if !combo.include?(i)
            ans << i
        end
    end
    return ans
end

def combine(n, k)
    if k == 1
        return (1..n).map{ |i| [i] }
    elsif k == n
        return [(1..n).map{ |i| i }]
    elsif k <= n-k
        ans = []
        combine(n, k-1).each do |combo|
            (combo[-1]+1..n).each{ |s| ans << combo+[s] }
        end
        return ans
    else
        return combine(n, n-k).map{ |combo| invert(combo, n) }
    end
end