# @param {Integer[]} arr
# @return {Integer[]}
def array_rank_transform(arr)
    ranks = Hash.new
    copy = arr.uniq.sort!
    copy.each_with_index{ |n, i| ranks[n] = i+1 }
    return arr.map{ |n| ranks[n] }
end