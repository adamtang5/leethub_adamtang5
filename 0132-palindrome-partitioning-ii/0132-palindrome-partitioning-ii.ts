function minCut(s: string): number {
  function inbound(i: number): boolean {
    return i >= 0 && i < s.length
  }
  
  const adj = {}
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length && j <= i + 1; j++) {
      let l = i
      let r = j
      while (inbound(l) && inbound(r) && s[l] === s[r]) {
        adj[l] ||= new Set()
        adj[l].add(r + 1)
        l--
        r++
      }
    }
  }
  
  const pathQ: number[][] = [[0]]
  const visited: Set<number> = new Set([0])
  let currPath: number[]
  let currNode: number
  while (pathQ.length) {
    currPath = pathQ.shift()
    currNode = currPath.at(-1)
    if (currNode === s.length) return currPath.length - 2
    adj[currNode].forEach(nb => {
      if (!visited.has(nb)) {
        visited.add(nb)
        pathQ.push([...currPath, nb])
      }
    })
  }
}