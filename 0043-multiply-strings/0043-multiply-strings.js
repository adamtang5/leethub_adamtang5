/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const products = new Array(num1.length + num2.length).fill(0);
  let p1, p2, prod, place;
  for (let i = num1.length - 1; i >= 0; i--) {
    p1 = num1.length - i - 1;
    for (let j = num2.length - 1; j >= 0; j--) {
      p2 = num2.length - j - 1;
      place = p1 + p2;
      prod = (+num1[i]) * (+num2[j]);
      products[place] += prod % 10;
      products[place + 1] += Math.floor(prod / 10);
    }
  }
  for (let i = 0; i < products.length - 1; i++) {
    if (products[i] > 9) {
      products[i + 1] += Math.floor(products[i] / 10);
      products[i] %= 10;
    }
  }
  if (products[products.length - 1] === 0) products.pop();
  return products.reverse().join('');
};