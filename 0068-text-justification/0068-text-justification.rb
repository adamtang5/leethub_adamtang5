# @param {String[]} words
# @param {Integer} max_width
# @return {String[]}
def left_justify(words, max_width)
  ans = words.join(" ")
  tail = " "*(max_width-ans.length)
  ans += tail
  ans
end

def justify_line(words, max_width)
  return left_justify(words, max_width) if words.length == 1
  words_len = words.inject(0){ |sum, word| sum+word.length }
  spaces = max_width-words_len
  ans = ""
  (0...words.length-1).each do |i|
    ans += words[i]
    base = spaces/(words.length-1)
    leftover = i < spaces%(words.length-1) ? 1 : 0
    ans += " "*(base+leftover)
  end
  ans += words[-1]
  ans
end

def full_justify(words, max_width)
  lines = []
  l = r = 0
  min_width = words[0].length
  while l < words.length
    if min_width == max_width
      lines << words[l..r].join(" ")
      l = r+1
      r = l
      min_width = l < words.length ? words[l].length : 0
    elsif min_width > max_width
      min_width -= words[r].length
      min_width -= 1
      r -= 1
      lines << justify_line(words[l..r], max_width)
      l = r+1
      r = l
      min_width = l < words.length ? words[l].length : 0
    else
      r += 1
      if r < words.length
        min_width += words[r].length
        min_width += 1
      else
        lines << left_justify(words[l..-1], max_width)
        break
      end
    end
  end
  lines
end