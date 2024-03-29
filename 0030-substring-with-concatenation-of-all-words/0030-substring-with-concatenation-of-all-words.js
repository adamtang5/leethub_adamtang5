/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const ans = [];
  const hash = {};
  words.forEach(word => {
    hash[word] = hash[word] || 0;
    hash[word]++;
  });

  let start, currWord, j;
  for (let offset = 0; offset < words[0].length; offset++) {
    start = offset;
    const hashCopy = {...hash};
    const currWords = [];
    for (let i = offset; i + words[0].length <= s.length; i += words[0].length) {
      currWord = '';
      j = 0;
      while (j < words[0].length) {
        currWord += s[i + j];
        j++;
      }
      start = Math.max(i + j - words.length * words[0].length, start);
      currWords.push(currWord);
      const popped = currWords[currWords.length - words.length - 1];
      if (hashCopy[popped] !== undefined) hashCopy[popped]++;
      if (hashCopy[currWord] !== undefined) {
        hashCopy[currWord]--;
        if (Object.values(hashCopy).every(val => val === 0)) ans.push(start);
      }
    }
  }
  return ans;
};