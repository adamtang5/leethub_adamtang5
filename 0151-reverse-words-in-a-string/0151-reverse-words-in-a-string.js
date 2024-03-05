/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.split(" ").filter(word => word.length > 0);
  return words.reverse().join(" ");
};