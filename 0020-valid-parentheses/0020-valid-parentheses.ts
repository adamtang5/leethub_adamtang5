function isValid(s: string): boolean {
  const stack: string[] = []
  const open = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (let p of s) {
    if (Object.values(open).includes(p)) {
      stack.push(p)
    } else if (stack.pop() !== open[p]) {
      return false
    }
  }
  return !stack.length
};