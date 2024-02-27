/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  const fw = {};
  const bw = {};
  for (let i = 0; i < pattern.length; i++) {
    if (words[i] === "constructor") words[i] = "constructor-";
    if (fw[pattern[i]] === undefined && bw[words[i]] === undefined) {
      fw[pattern[i]] = words[i];
      bw[words[i]] = pattern[i];
    } else if (fw[pattern[i]] !== undefined && bw[words[i]] === undefined) {
      return false;
    } else if (fw[pattern[i]] === undefined && bw[words[i]] !== undefined) {
      return false;
    } else if (fw[pattern[i]] !== words[i] || bw[words[i]] !== pattern[i]) {
      return false;
    }
  }
  return true;
};