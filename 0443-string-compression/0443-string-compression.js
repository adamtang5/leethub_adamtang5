/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let [currCh, currLen, currLenStr, start, i, j] = [chars[0], 1, '', 0, 1, 0];
    while (i < chars.length) {
        if (chars[i] === currCh) {
            currLen++;
        } else {
            j = 0;
            if (currLen > 1) {
                currLenStr = currLen.toString();
                while (j < currLenStr.length) {
                    chars[start + 1 + j] = currLenStr[j];
                    j++;
                }
            }
            start += 1 + j;
            chars[start] = chars[i];
            currCh = chars[start];
            currLen = 1;
        }
        i++;
    }
    j = 0;
    if (currLen > 1) {
        currLenStr = currLen.toString();
        while (j < currLenStr.length) {
            chars[start + 1 + j] = currLenStr[j];
            j++;
        }
    }
    return start + 1 + j;
};