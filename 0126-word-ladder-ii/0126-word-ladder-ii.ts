function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
  const layers: Set<string>[] = [new Set([beginWord])]
  const visited: Set<string> = new Set([beginWord])
  const wordSet: Set<string> = new Set(wordList)
  const parents = {}
  
  while (!visited.has(endWord) && layers.at(-1).size) {
    const currLayer: Set<string> = layers.at(-1)
    layers.push(new Set())
    currLayer.forEach(currWord => {
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextWord: string = currWord.slice(0, j) + String.fromCharCode('a'.charCodeAt(0) + k) + currWord.slice(j + 1)
          if (nextWord !== currWord && wordSet.has(nextWord) && !visited.has(nextWord)) {
            const nextLayer: Set<string> = layers.at(-1)
            nextLayer.add(nextWord)
            parents[nextWord] = parents[nextWord] || new Set()
            parents[nextWord].add(currWord)
          }
        }
      }
    })
    layers.at(-1).forEach(word => visited.add(word))
  }
  if (!visited.has(endWord)) return []
  
  function backtrack(paths: string[][]): string[][] {
    if (paths[0][0] === beginWord) return paths.filter(path => path[0] === beginWord)
    const ans = []
    paths.forEach(path => parents[path[0]].forEach(parent => ans.push([parent, ...path])))
    return backtrack(ans)
  }
  
  return backtrack([[endWord]])
}