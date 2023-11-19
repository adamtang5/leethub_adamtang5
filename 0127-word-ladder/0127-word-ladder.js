/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const distance = (word1, word2) => {
    let ans = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) ans++;
    }
    return ans;
  };
  
  const wordSet = new Set(wordList);
  const adjList = {};
  adjList[beginWord] = new Set();
  const queue = [beginWord];
  const visited = new Set();
  let first;
  while (queue.length) {
    first = queue.shift();
    visited.add(first);
    wordList.forEach(word => {
      if (distance(first, word) === 1) {
        if (!visited.has(word) && !queue.includes(word)) queue.push(word);
        adjList[first] = adjList[first] || new Set();
        adjList[word] = adjList[word] || new Set();
        adjList[first].add(word);
        adjList[word].add(first);
      }
    });
  }
  if (!adjList[endWord]) return 0;
  
  const pathQ = [[beginWord]];
  visited.clear();
  visited.add(beginWord);
  let currPath, currNode;
  while (pathQ.length) {
    currPath = pathQ.shift();
    currNode = currPath.at(-1);
    if (currNode === endWord) return currPath.length;
    adjList[currNode].forEach(nb => {
      if (!visited.has(nb)) {
        visited.add(nb);
        pathQ.push([...currPath, nb]);
      }
    });
  }
};