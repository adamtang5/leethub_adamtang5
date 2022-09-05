/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const ans = [];
    let currKeyStr = '';
    words.forEach((word) => {
        let chs = word.split('');
        chs.sort();
        const keyStr = JSON.stringify(chs);
        if (keyStr !== currKeyStr) {
            ans.push(word);
            currKeyStr = keyStr;
        }
    });
    return ans;
};