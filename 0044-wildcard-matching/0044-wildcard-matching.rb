# @param {String} s
# @param {String} p
# @return {Boolean}
def char_match(ch1, ch2)
  return false if !ch2 || !ch1
  ch2 == '?' || ch2 == ch1
end

def parse(s, chunks)
  p [s, chunks]
  return true if chunks.length == 0
  start = 0
  chunk_idx = 0
  while chunk_idx < chunks.length && start < s.length
    start += 1 while start < s.length && !char_match(s[start], chunks[chunk_idx][0])
    break if start == s.length
    j = 1
    j += 1 while j < chunks[chunk_idx].length && start+j < s.length && char_match(s[start+j], chunks[chunk_idx][j])
    if j == chunks[chunk_idx].length
      chunk_idx += 1
      start += j
    else
      start += 1
      # start += 1 while start < s.length && !char_match(s[start], chunks[chunk_idx][0])
    end
  end
  chunk_idx == chunks.length
end

def is_match(s, p)
  p.gsub!(/\*+/, '*')
  i = 0
  if p[i] != '*'
    while p[i] != '*' && i < p.length
      return false if !char_match(s[i], p[i])
      i += 1
    end
    s = s[i..-1]
    p = p[i..-1]
  end
  return true if s == '' && p == ''
  return false if s != '' && p == ''
  return true if p == "*"
  i = 0
  if p[-1-i] != '*'
    while p[-1-i] != '*'
      return false if !char_match(s[-1-i], p[-1-i])
      i += 1
    end
    s = s[0...-i]
    p = p[0...-i]
  end
  return true if p == "*"
  parse(s, p.split('*')[1..-1])
  
end