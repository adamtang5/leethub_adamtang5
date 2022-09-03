# @param {Integer[]} arr
# @return {Integer[]}
def get_distances(arr)
    buckets = Hash.new { |h, k| h[k] = [] }
    arr.each_with_index { |el, i| buckets[el] << i }
    ans = [0] * arr.length
    buckets.keys.each do |el|
        indices = buckets[el]
        l, r, total = 0, indices.length - 1, 0
        indices.each { |i| total += i - indices[0] }
        ans[indices[0]] = total
        
        (1...indices.length).each do |i|
            weight = l - r + 1
            total += weight * (indices[i] - indices[i - 1])
            l += 1
            r -= 1
            ans[indices[i]] = total
        end
    end
    return ans
end