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
        if (val === 0) {
            return '';
        } else if (val <= 3) {
            return new Array(val).fill(lookup[pow][1]).join('');
        } else if (val <= 8) {
            const left = val < 5 ? lookup[pow][1] : '';
            const right = val > 5 ? new Array(val - 5).fill(lookup[pow][1]).join('') : '';
            return left + lookup[pow][5] + right;
        } else if (val === 9) {
            return lookup[pow][1] + lookup[pow + 1][1];
        }
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
