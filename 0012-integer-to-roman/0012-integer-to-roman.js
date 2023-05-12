/**
* @param {number} num
* @return {string}
*/
var intToRoman = function(num) {
  const lookup = [
    {
      1: 'I',
      5: 'V',
    },
    {
      1: 'X',
      5: 'L',
    },
    {
      1: 'C',
      5: 'D',
    },
    {
      1: 'M',
    },
  ];

  const digit2Roman = (val, pow) => {
    let ans = '';
    switch (val % 5) {
      case 4:
        if (val > 5) {
          ans += lookup[pow][1] + lookup[pow + 1][1];
        } else {
          ans += lookup[pow][1] + lookup[pow][5];
        }
        break;
      default:
        if (val >= 5) ans += lookup[pow][5];
        ans += new Array(val % 5).fill(lookup[pow][1]).join('');
    }
    return ans;
  };

  const digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  const places = digits.map((digit, pow) => digit2Roman(digit, pow));
  return places.reverse().join('');
};