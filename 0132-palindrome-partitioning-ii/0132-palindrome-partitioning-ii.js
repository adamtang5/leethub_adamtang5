/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const inbound = i => {
    return i >= 0 && i < s.length;
  };
  
  const adj = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length && j <= i + 1; j++) {
      let [l, r] = [i, j];
      while (inbound(l) && inbound(r) && s[l] === s[r]) {
        adj[l] ||= new Set();
        adj[l].add(r + 1);
        l--;
        r++;
      }
    }
  }
  
  const pathQ = [[0]];
  const visited = new Set();
  visited.add(0);
  let currPath, currNode;
  while (pathQ.length) {
    currPath = pathQ.shift();
    currNode = currPath.at(-1);
    if (currNode === s.length) return currPath.length - 2;
    adj[currNode].forEach(nb => {
      if (!visited.has(nb)) {
        visited.add(nb);
        pathQ.push([...currPath, nb]);
      }
    })
  }
};