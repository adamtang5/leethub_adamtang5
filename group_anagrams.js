/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
// 0. create const for ASCII value of 'a'
// 1. create empty object (tallyObj) to track anagrams
// 2. iterate through each word in strs
// 3. generate an array (count) of 26 counts for each letter
// 3a. iterate through each character in word (ch)
// 3b. increase by 1 the number at the position in the alphabet, e.g. 'a' -> count[0], 'z' -> count[25]
// 4. if tallyObj already has JSON.stringify(count) as key, push word into value array
// 5. if tallyObj does not have JSON.stringify(count) as key, set value to [ word ]
// 6. return the values of tallyObj object

*/

var groupAnagrams = function(strs) {
    // 0. create const for ASCII value of 'a'
    const aCode = 'a'.charCodeAt(0);
    
    // 1. create empty object (tallyObj) to track anagrams
    const tallyObj = {};
    
    // 2. iterate through each word in strs
    strs.forEach(word => {
        
        // 3. generate an array (count) of 26 counts for each letter
        const count = Array(26).fill(0);
        
        // 3a. iterate through each character in word (ch)
        for (i = 0; i < word.length; i++) {
            // let ch = word[i];
            
            // 3b. increase by 1 the number at the position in the alphabet, e.g. 'a' -> count[0], 'z' -> count[25]
            let charCode = word.charCodeAt(i);
            count[charCode - aCode]++;
        }
        
        // 4. if tallyObj already has JSON.stringify(count) as key, push word into value array
        if (tallyObj[JSON.stringify(count)] !== undefined) {
            tallyObj[JSON.stringify(count)].push(word);
            
        // 5. if tallyObj does not have JSON.stringify(count) as key, set value to [ word ]
        } else {
            tallyObj[JSON.stringify(count)] = [ word ];
        }
    })
    
    // 6. return the values of tallyObj object
    return Object.values(tallyObj);
};
