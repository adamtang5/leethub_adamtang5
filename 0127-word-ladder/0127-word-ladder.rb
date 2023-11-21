# @param {String} begin_word
# @param {String} end_word
# @param {String[]} word_list
# @return {Integer}
def get_patterns(word, patterns)
  (0...word.length).each do |i|
    key = word[0...i]+"*"+word[i+1..-1]
    patterns[key] << word
  end
  nil
end

def ladder_length(begin_word, end_word, word_list)
  return 0 if !word_list.include?(end_word)
  
  patterns = Hash.new{ |h, k| h[k] = Array.new }
  [begin_word]+word_list.each{ |word| get_patterns(word, patterns) }
  path_q, visited, curr_path, curr_node = [[begin_word]], [begin_word].to_set, nil, nil
  while !path_q.empty?
    curr_path = path_q.shift
    curr_node = curr_path[-1]
    return curr_path.length if curr_node == end_word
    (0...curr_node.length).each do |i|
      key = curr_node[0...i]+"*"+curr_node[i+1..-1]
      patterns[key].each do |nb|
        if nb != curr_node && !visited.include?(nb)
          visited << nb
          path_q << curr_path+[nb]
        end
      end
    end
  end
  0
end