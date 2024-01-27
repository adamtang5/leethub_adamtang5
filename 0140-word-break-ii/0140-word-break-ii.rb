# @param {String} s
# @param {String[]} word_dict
# @return {String[]}
def build(curr, curr_words, s, ans, parents)
  if curr == 0
    ans << curr_words.join(' ')
    return
  end
  return if !parents.has_key?(curr)
  parents[curr].each{ |parent| build(parent, [s[parent...curr]]+curr_words, s, ans, parents) }
  nil
end

def word_break(s, word_dict)
  max_word_len, min_word_len, len_sets = 0, 20, Hash.new{ |h, k| h[k] = Set.new }
  word_dict.each do |word|
    max_word_len = [max_word_len, word.length].max
    min_word_len = [min_word_len, word.length].min
    len_sets[word.length] << word
  end
  
  parents, start, copy = Hash.new{ |h, k| h[k] = Set.new }, 0, s
  while start < s.length
    (min_word_len..[max_word_len, copy.length].min).each do |l|
      if len_sets.has_key?(l)
        len_sets[l].each do |word|
          parents[start+word.length] << start if copy.start_with?(word)
        end
      end
    end
    copy = copy[1..-1]
    start += 1
  end
  
  ans = []
  build(s.length, [], s, ans, parents)
  ans
end