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
      case 0:
        if (val === 5) {
          ans += lookup[pow][5];
        }
      default:
        if (val > 5) ans += lookup[pow][5];
        ans += new Array(val % 5).fill(lookup[pow][1]).join('');
    }
    return ans;
  };

  let powerOf10 = Math.floor(Math.log10(num));
  let places = new Array(powerOf10 + 1).fill(0);
  while (num > 0) {
    places[powerOf10] = Math.floor(num / 10 ** powerOf10);
    num = num % 10 ** powerOf10;
    powerOf10 = Math.floor(Math.log10(num));
  }

  places = places.map((val, pow) => digit2Roman(val, pow));
  return places.reverse().join('');
};