function simplifyPath(path: string): string {
  const names: string[] = path.split('/')
  const stack: string[] = []
  names.forEach(name => {
    if (name === '..') {
      stack.pop()
    } else if (name !== '' && name !== '.') {
      stack.push(name)
    }
  })
  let ans = ''
  stack.forEach(name => ans += '/' + name)
  return ans || '/'
}