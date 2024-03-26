/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const subs1 = version1.split(".").map(d => +d);
  const subs2 = version2.split(".").map(d => +d);
  let i = 0;
  while (i < subs1.length && i < subs2.length) {
    if (subs1[i] < subs2[i]) return -1;
    if (subs1[i] > subs2[i]) return 1;
    i++;
  }
  while (i < subs1.length) {
    if (subs1[i] > 0) return 1;
    i++;
  }
  while (i < subs2.length) {
    if (subs2[i] > 0) return -1;
    i++;
  }
  return 0;
};