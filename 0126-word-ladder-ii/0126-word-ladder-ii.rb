# @param {String} begin_word
# @param {String} end_word
# @param {String[]} word_list
# @return {String[][]}
def backtrack(paths, begin_word, parents)
  return paths.select{ |path| path[0] == begin_word } if paths[0][0] == begin_word
  ans = []
  paths.each{ |path| parents[path[0]].each{ |parent| ans << [parent]+path } }
  backtrack(ans, begin_word, parents)
end

def find_ladders(begin_word, end_word, word_list)
  layers, visited, word_set, parents = [[begin_word].to_set], [begin_word].to_set, word_list.to_set, Hash.new{ |h, k| h[k] = Set.new }
  
  while !visited.include?(end_word) && !layers[-1].empty?
    curr_layer = layers[-1]
    layers << Set.new
    curr_layer.each do |curr_word|
      (0...curr_word.length).each do |j|
        ('a'..'z').each do |c|
          next_word = curr_word[0...j]+c+curr_word[j+1..-1]
          if next_word != curr_word && word_set.include?(next_word) && !visited.include?(next_word)
            next_layer = layers[-1]
            next_layer << next_word
            parents[next_word] << curr_word
          end
        end
      end
    end
    visited |= layers[-1]
  end
  
  return [] if !visited.include?(end_word)
  backtrack([[end_word]], begin_word, parents)
end