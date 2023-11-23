/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const layers = [new Set([beginWord])];
  const visited = new Set([beginWord]);
  const wordSet = new Set(wordList);
  const parents = {};
  
  while (!visited.has(endWord) && layers.at(-1).size) {
    const currLayer = layers.at(-1);
    layers.push(new Set());
    currLayer.forEach(currWord => {
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextWord = currWord.slice(0, j) + String.fromCharCode('a'.charCodeAt(0) + k) + currWord.slice(j + 1);
          if (nextWord !== currWord && wordSet.has(nextWord) && !visited.has(nextWord)) {
            const nextLayer = layers.at(-1);
            nextLayer.add(nextWord);
            parents[nextWord] = parents[nextWord] || new Set();
            parents[nextWord].add(currWord);
          }
        }
      }
    });
    layers.at(-1).forEach(word => visited.add(word));
  }
  if (!visited.has(endWord)) return [];
  
  const backtrack = paths => {
    if (paths[0][0] === beginWord) return paths.filter(path => path[0] === beginWord);
    const ans = [];
    paths.forEach(path => parents[path[0]].forEach(parent => ans.push([parent, ...path])));
    return backtrack(ans);
  };
  
  return backtrack([[endWord]]);
};