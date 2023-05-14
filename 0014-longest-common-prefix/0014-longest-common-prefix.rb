# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  ans = ''
  min_len = strs.map(&:length).min
  
  (0...min_len).each do |i|
    if strs.all?{ |s| s[i] == strs[0][i] }
      ans += strs[0][i]
    else
      break
    end
  end
  ans
end