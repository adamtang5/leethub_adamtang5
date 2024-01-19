# @param {String} s
# @param {String[]} word_dict
# @return {Boolean}
def dfs(s, fails, min_word_len, max_word_len, len_sets)
  return true if s.length == 0
  return false if fails.include?(s)
  if s.length < min_word_len
    fails << s
    return false
  end
  ans = false
  (min_word_len..[max_word_len, s.length].min).each do |len|
    if len_sets.has_key?(len)
      len_sets[len].each do |word|
        ans ||= dfs(s[word.length..-1], fails, min_word_len, max_word_len, len_sets) if s.start_with?(word)
      end
    end
  end
  fails << s if !ans
  ans
end

def word_break(s, word_dict)
  max_word_len, min_word_len, len_sets, fails = 0, 20, Hash.new{ |h, k| h[k] = Set.new }, Set.new
  word_dict.each do |word|
    max_word_len = [max_word_len, word.length].max
    min_word_len = [min_word_len, word.length].min
    len_sets[word.length] << word
  end
  dfs(s, fails, min_word_len, max_word_len, len_sets)
end