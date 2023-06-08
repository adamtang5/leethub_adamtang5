# @param {String} s
# @param {String[]} words
# @return {Integer[]}
def find_substring(s, words)
  ans = []
  tally = Hash.new(0)
  words.each { |word| tally[word] += 1 }
  start, curr_word, j = 0, '', 0

  (0...words[0].length).each do |offset|
    start = offset
    copy = tally.dup
    curr_words = []
    (offset..s.length-words[0].length).step(words[0].length).each do |i|
      curr_word, j = '', 0
      while j < words[0].length
        curr_word += s[i+j]
        j += 1
      end
      start = [i+j-words.length*words[0].length, start].max
      curr_words << curr_word
      if curr_words.length-words.length-1 >= 0
        popped = curr_words[-words.length-1]
        copy[popped] += 1 if copy[popped]
      end
      if copy[curr_word]
        copy[curr_word] -= 1
        ans << start if copy.values.all?{ |val| val == 0 }
      end
    end
  end
  ans
end