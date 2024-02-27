# @param {String} pattern
# @param {String} s
# @return {Boolean}
def word_pattern(pattern, s)
  words = s.split
  return false if pattern.length != words.length
  fw, bw = Hash.new, Hash.new
  (0...pattern.length).each do |i|
    if !fw.include?(pattern[i]) && !bw.include?(words[i])
      fw[pattern[i]] = words[i]
      bw[words[i]] = pattern[i]
    elsif fw.include?(pattern[i]) && !bw.include?(words[i])
      return false
    elsif !fw.include?(pattern[i]) && bw.include?(words[i])
      return false
    elsif fw[pattern[i]] != words[i] || bw[words[i]] != pattern[i]
      return false
    end
  end
  true
end