# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    groups = Hash.new { |h, k| h[k] = [] }
    strs.each do |s|
        keyStr = s.bytes
        keyStr.sort!
        keyStr = keyStr.inspect
        groups[keyStr] << s
    end
    return groups.values
end