# @param {Integer} num
# @return {String}
def digit_to_roman(val, pow)
  lookup = [
    {1=>'I', 5=>'V'},
    {1=>'X', 5=>'L'},
    {1=>'C', 5=>'D'},
    {1=>'M'},
  ]

  ans = ''
  case val%5
  when 4
    if val > 5
      ans += lookup[pow][1]+lookup[pow+1][1]
    else
      ans += lookup[pow][1]+lookup[pow][5]
    end
  else
    ans += lookup[pow][5] if val >= 5
    ans += lookup[pow][1]*(val%5)
  end
  ans
end

def int_to_roman(num)
  digits = []
  while num > 0
    digits << num%10
    num = num / 10
  end
  ans = ''
  digits.each_with_index{ |digit, pow| ans = digit_to_roman(digit, pow)+ans }
  ans
end