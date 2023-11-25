type PresentNumberState = {
  state: "Present"
  range: { lb: number; ub: number }
}

type NeighborNumberState = {
  state: "Neighbor"
}

type NumberState = PresentNumberState | NeighborNumberState

function longestConsecutive(nums: number[]): number {
  const tally = {}
  let ans = 0
  nums.forEach(num => {
    if (!tally[num]) {
      if ((!tally[num + 1] || tally[num + 1].state === "Neighbor") &&
          (!tally[num - 1] || tally[num - 1].state === "Neighbor")) {
        const newNumberState: PresentNumberState = {
          state: "Present",
          range: { lb: num, ub: num },
        }
        tally[num] = newNumberState
        ans = Math.max(ans, 1)
        tally[num + 1] = { state: "Neighbor" }
        tally[num - 1] = { state: "Neighbor" }
      }
    } else if (tally[num] && tally[num].state === "Neighbor") {
      tally[num + 1] = tally[num + 1] || { state: "Neighbor" }
      tally[num - 1] = tally[num - 1] || { state: "Neighbor" }
      let lMin = num
      let rMax = num
      if (tally[num + 1] && tally[num + 1].state === "Present") rMax = tally[num + 1].range.ub
      if (tally[num - 1] && tally[num - 1].state === "Present") lMin = tally[num - 1].range.lb
      const newNumberState: PresentNumberState = {
        state: "Present",
        range: { lb: lMin, ub: rMax }
      }
      tally[num] = newNumberState
      ans = Math.max(ans, rMax - lMin + 1)
      tally[lMin] = newNumberState
      tally[rMax] = newNumberState
    }
  })
  return ans
}