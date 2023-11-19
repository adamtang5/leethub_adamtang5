function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  function distance(word1: string, word2: string): number {
    let ans = 0
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) ans++
    }
    return ans
  }
  
  const adjList = {}
  const wordQ: string[] = [beginWord]
  const visited: Set<string> = new Set()
  let first: string
  while (wordQ.length) {
    first = wordQ.shift()
    visited.add(first)
    wordList.forEach(word => {
      if (distance(first, word) === 1) {
        if (!visited.has(word) && !wordQ.includes(word)) wordQ.push(word)
        adjList[first] = adjList[first] || new Set()
        adjList[word] = adjList[word] || new Set()
        adjList[first].add(word)
        adjList[word].add(first)
      }
    })
  }
  
  if (!adjList[endWord]) return 0
  const pathQ: string[][] = [[beginWord]]
  visited.clear()
  visited.add(beginWord)
  let currPath: string[]
  let currNode: string
  while (pathQ.length) {
    currPath = pathQ.shift()
    currNode = currPath.at(-1)
    if (currNode === endWord) return currPath.length
    adjList[currNode].forEach(nb => {
      if (!visited.has(nb)) {
        visited.add(nb)
        pathQ.push([...currPath, nb])
      }
    })
  }
}