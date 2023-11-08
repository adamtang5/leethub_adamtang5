function reverseBits(n: number): number {
	const reversedArr: string[] = n.toString(2).split('').reverse()
  const right: string[] = new Array(32 - reversedArr.length).fill('0')
  return parseInt([...reversedArr, ...right].join(''), 2)
}