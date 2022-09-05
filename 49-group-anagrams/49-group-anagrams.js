/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    const groups = {};
    const aCode = 'a'.charCodeAt(0);
    let keyString = "";

    strs.forEach(s => {
        const counts = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - aCode]++;
        }
        keyString = JSON.stringify(counts);
        groups[keyString] = groups[keyString] || [];
        groups[keyString].push(s);
    });
    
    return Object.values(groups);
};