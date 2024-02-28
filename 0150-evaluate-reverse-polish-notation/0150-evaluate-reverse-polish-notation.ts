function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  let first: number
  let second: number
  let result: number
  for (const token of tokens) {
    if ('+-*/'.includes(token)) {
      second = stack.pop()
      first = stack.pop()
      switch (token) {
        case '+':
          result = first + second
          break
        case '-':
          result = first - second
          break
        case '*':
          result = first * second
          break
        case '/':
          let sign = 1
          if (first / second < 0) sign = -1
          result = Math.floor(Math.abs(first) / Math.abs(second)) * sign
          break
        default:
          break
      }
      stack.push(result)
    } else {
      stack.push(parseInt(token, 10))
    }
  }
  return stack[0]
}