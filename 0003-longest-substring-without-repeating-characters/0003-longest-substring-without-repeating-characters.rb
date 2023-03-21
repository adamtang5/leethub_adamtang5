# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  return 0 if s == ''
  curr_sub, max_count = '', 0
  s.each_char.with_index do |ch, i|
    if curr_sub.include?(ch)
      curr_sub = curr_sub[curr_sub.index(ch)+1..-1] + ch
    else
      curr_sub += ch
    end
    if curr_sub.length > max_count
      max_count = curr_sub.length
    end
  end
  return max_count
end