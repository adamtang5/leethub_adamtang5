function groupAnagrams(strs: string[]): string[][] {
  const groups = {}
  let keyString: string
  strs.forEach(s => {
    const chs: string[] = s.split('')
    chs.sort();
    keyString = JSON.stringify(chs)
    groups[keyString] = groups[keyString] || []
    groups[keyString].push(s)
  })
  return Object.values(groups)
}