/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    const groups = {};
    let keyString = "";

    strs.forEach(s => {
        let codes = [];
        for (let i = 0; i < s.length; i++) {
            codes.push(s.charCodeAt(i));
        }
        codes.sort((a, b) => a - b);

        keyString = JSON.stringify(codes);
        // console.log(keyString);
        groups[keyString] = groups[keyString] || [];
        groups[keyString].push(s);
    });

    return Object.values(groups);
};
