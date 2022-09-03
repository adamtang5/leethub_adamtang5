/**
 * @param {number[]} arr
 * @return {number[]}
 */

var getDistances = function(arr) {
    const buckets = {};
    arr.forEach((el, i) => {
        buckets[el] = buckets[el] || [];
        buckets[el].push(i);
    });
    const ans = new Array(arr.length).fill(0);
    Object.keys(buckets).forEach(el => {
        const indices = buckets[el];
        let [l, r, total] = [0, indices.length - 1, 0];
        indices.forEach(i => total += i - indices[0]);
        ans[indices[0]] = total;
        
        for (let i = 0; i < indices.length - 1; i++) {
            l++;
            const delta = indices[i + 1] - indices[i];
            total += delta * l - delta * r;
            r--;
            ans[indices[i + 1]] = total;
        }
    })
    return ans;
};