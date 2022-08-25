/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
iterate through each s in strs, and tally counts for each of 26 letters in alphabet
keep track of all anagram groups in group object, with key being stringified counts,
and value being list of anagrams in that group
*/

var groupAnagrams = function(strs) {
    const groups = {};
    const aCode = 'a'.charCodeAt(0);
    // console.log(aCode);
    let keyString = "";
    
    strs.forEach(s => {
        let tally = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            tally[s.charCodeAt(i) - aCode]++;
        }
        
        keyString = JSON.stringify(tally);
        // console.log(keyString);
        groups[keyString] = groups[keyString] || [];
        groups[keyString].push(s);
    });
    
    return Object.values(groups);
};
