# @param {String} s
# @return {String}
def reverse_words(s)
  ans = curr = ""
  s.each_char do |ch|
    if ch == " "
      if ans != "" && curr != ""
        ans = curr+" "+ans
      elsif curr != ""
        ans = curr
      end
      curr = ""
    else
      curr += ch
    end
  end
  if ans != "" && curr != ""
    ans = curr+" "+ans
  elsif curr != ""
    ans = curr
  end
  ans
end