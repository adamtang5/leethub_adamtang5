/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const leftJustify = words => {
    let ans = words.join(" ");
    const tail = " ".repeat(maxWidth - ans.length);
    ans += tail;
    return ans;
  };
  
  const justifyLine = words => {
    if (words.length === 1) return leftJustify(words);
    const wordsLen = words.reduce((sum, word) => sum + word.length, 0);
    let spaces = maxWidth - wordsLen;
    const wordsCount = words.length;
    let ans = "";
    for (let i = 0; i < wordsCount - 1; i++) {
      ans += words[i];
      const base = Math.floor(spaces / (wordsCount - 1));
      const leftover = i < spaces % (wordsCount - 1) ? 1 : 0;
      ans += " ".repeat(base + leftover);
    }
    ans += words.at(-1);
    return ans;
  };
  
  const lines = [];
  let [l, r, minWidth] = [0, 0, words[0].length];
  while (l < words.length) {
    if (minWidth === maxWidth) {
      lines.push(words.slice(l, r + 1).join(" "));
      l = r + 1;
      r = l;
      minWidth = l < words.length ? words[l].length : 0;
    } else if (minWidth > maxWidth) {
      minWidth -= words[r].length;
      minWidth--;
      r--;
      lines.push(justifyLine(words.slice(l, r + 1)));
      l = r + 1;
      r = l;
      minWidth = l < words.length ? words[l].length : 0;
    } else if (minWidth < maxWidth) {
      r++;
      if (r < words.length) {
        minWidth += words[r].length;
        minWidth++;
      } else {
        lines.push(leftJustify(words.slice(l)));
        break;
      }
    }
  }
  return lines;
};