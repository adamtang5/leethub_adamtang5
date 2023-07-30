# @param {String} s
# @return {Boolean}
def valid_num(s, type)
  return false if s.length == 0
  return valid_num(s[1..-1], type) if "+-".include?(s[0])
  
  if type == "dec"
    dot_idx = -1
    (0...s.length).each do |i|
      if s[i] == "."
        return false if dot_idx >= 0 || s.length == 1
        dot_idx = i
      elsif !/[0-9]/.match?(s[i])
        return false
      end
    end
  elsif type == "int"
    (0...s.length).each do |i|
      return false if !/[0-9]/.match?(s[i])
    end
  end
  true
end

def is_number(s)
  s.downcase!
  parts = []
  if !s.include?("e")
    parts << s
  else
    parts << s[0...s.index("e")]
    parts << s[s.index("e")+1..-1]
  end
  
  if parts.length == 1
    return valid_num(parts[0], "dec")
  elsif parts.length == 2
    return valid_num(parts[0], "dec") && valid_num(parts[1], "int")
  end
  false
end