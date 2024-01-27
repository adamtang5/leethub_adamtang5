/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let [maxWordLen, minWordLen] = [0, 20];
  const lenSets = {};
  wordDict.forEach(word => {
    maxWordLen = Math.max(maxWordLen, word.length);
    minWordLen = Math.min(minWordLen, word.length);
    lenSets[word.length] ||= new Set();
    lenSets[word.length].add(word);
  });
  const parents = {};
  let start = 0;
  let sCopy = s;
  while (start < s.length) {
    for (let len = minWordLen; len <= maxWordLen && len <= sCopy.length; len++) {
      if (len in lenSets) {
        lenSets[len].forEach(word => {
          if (sCopy.startsWith(word)) {
            parents[start + word.length] ||= new Set();
            parents[start + word.length].add(start);
          }
        });
      }
    }
    sCopy = sCopy.slice(1);
    start++;
  }
  
  const ans = [];
  const build = (curr, currWords) => {
    if (curr === 0) {
      ans.push(currWords.join(' '));
      return;
    }
    if (!(curr in parents)) return;
    parents[curr].forEach(parent => {
      build(parent, [s.slice(parent, curr), ...currWords]);
    });
  };
  
  build(s.length, []);
  return ans;
};