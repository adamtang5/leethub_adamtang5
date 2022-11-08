/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const ans = [];
    const hash = {};
    words.forEach(word => {
        hash[word] = hash[word] || 0;
        hash[word]++;
    });
    
    for (let offset = 0; offset < words[0].length; offset++) {
        let start = offset;
        const hashCopy = {...hash};
        let currWords = [];
        for (let i = offset; i + words[0].length <= s.length; i += words[0].length) {
            let currWord = '';
            let j = 0;
            while (j < words[0].length) {
                currWord += s[i + j];
                j++;
            }
            start = Math.max(i + j - words.length * words[0].length, start);
            currWords.push(currWord);
            const popped = currWords[currWords.length - words.length - 1];
            if (hashCopy[popped] !== undefined) hashCopy[popped]++;
            if (hashCopy[currWord] !== undefined) {
                hashCopy[currWord]--;
                if (Object.values(hashCopy).every(val => val === 0)) {
                    ans.push(start);
                }
            }
        }
    }
    
    ans.sort((a, b) => a - b);
    return ans;
};