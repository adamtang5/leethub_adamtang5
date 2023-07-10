/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const groups = {};
  let keyString = "";

  strs.forEach(s => {
    let chs = s.split('');
    chs.sort();
    keyString = JSON.stringify(chs);
    groups[keyString] = groups[keyString] || [];
    groups[keyString].push(s);
  });

  return Object.values(groups);
};