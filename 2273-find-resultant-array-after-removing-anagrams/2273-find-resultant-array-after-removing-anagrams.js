/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const ans = [];
    const aCode = 'a'.charCodeAt(0);
    let currKeyStr = '';
    words.forEach((word) => {
        const counts = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            counts[word.charCodeAt(i) - aCode]++;
        }
        const keyStr = JSON.stringify(counts);
        if (keyStr !== currKeyStr) {
            ans.push(word);
            currKeyStr = keyStr;
        }
    });
    return ans;
};