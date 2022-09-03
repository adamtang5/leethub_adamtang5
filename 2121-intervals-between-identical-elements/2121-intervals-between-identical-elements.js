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
        indices.forEach(i => total += i - indices[0]);  // right sum - left sum + curr i * weight
        ans[indices[0]] = total;
        
        for (let i = 1; i < indices.length; i++) {
            let weight = l - r + 1;
            total += (indices[i] - indices[i - 1]) * weight;
            l++;
            r--;
            ans[indices[i]] = total;
        }
    })
    return ans;
};