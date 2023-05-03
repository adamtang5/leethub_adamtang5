# @param {String} s
# @return {Integer}
def my_atoi(s)
  s.strip!()
  return 0 if s == ''
  
  sign = 1
  if s[0] == '-'
    sign = -1
  end
  if s[0] == '-' || s[0] == '+'
    s = s[1..-1]
  end
  
  return 0 if !/^\d+/.match?(s)
  
  ans = sign * /^\d+/.match(s)[0].to_i
  return ans < 0 ? [ans, -2147483648].max : [ans, 2147483647].min
end