/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort();
  const tallies = [[nums[0], 1]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === tallies[tallies.length - 1][0]) {
      tallies[tallies.length - 1][1]++;
    } else {
      tallies.push([nums[i], 1]);
    }
  }
  
  const sortedKeys = tallies.map(pair => pair[0]);
  const counts = tallies.map(pair => pair[1]);
  
  const parts = [];
  const dfs = (target, tallies, total, res=[]) => {
    if (!target && !total) parts.push(res);
    if (target > total) return;
    const curr = tallies.shift();
    for (let part = Math.min(curr, target); part >= 0; part--) {
      dfs(target - part, tallies.slice(), total - curr, [...res, part]);
    }
  };
  
  for (let target = 0; target <= nums.length; target++) {
    dfs(target, counts.slice(), nums.length);
  }
  
  const ans = [];
  const convert = () => {
    parts.forEach(distro => {
      let sub = [];
      for (let i = 0; i < distro.length; i++) {
        sub = [...sub, ...(new Array(distro[i]).fill(sortedKeys[i]))];
      }
      ans.push(sub);
    });
  };
  convert();
  return ans;
};