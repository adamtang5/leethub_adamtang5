function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0'
  const rev1: string[] = num1.split('').reverse()
  const rev2: string[] = num2.split('').reverse()
  const products: number[] = new Array(num1.length + num2.length).fill(0)
  let prod: number
  let place: number
  rev1.forEach((digit1, place1) => {
    rev2.forEach((digit2, place2) => {
      place = place1 + place2
      prod = (+digit1) * (+digit2)
      products[place] += prod % 10
      products[place + 1] += Math.floor(prod / 10)
    })
  })
  for (let i = 0; i < products.length - 1; i++) {
    if (products[i] > 9) {
      products[i + 1] += Math.floor(products[i] / 10)
      products[i] %= 10
    }
  }
  if (products.at(-1) === 0) products.pop()
  return products.reverse().join('')
}