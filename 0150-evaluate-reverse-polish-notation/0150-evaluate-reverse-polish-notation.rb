# @param {String[]} tokens
# @return {Integer}
def eval_rpn(tokens)
  stack = []
  first = second = result = nil
  tokens.each do |token|
    if '+-*/'.include?(token)
      second = stack.pop
      first = stack.pop
      case token
      when '+'
        result = first+second
      when '-'
        result = first-second
      when '*'
        result = first*second
      when '/'
        sign = 1
        sign = -1 if first/second < 0
        result = first.abs/second.abs*sign
      end
      stack << result
    else
      stack << token.to_i
    end
  end
  stack[0]
end