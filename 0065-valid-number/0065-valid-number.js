/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const digitsRe = /[0-9]/;

  const validDec = s => {
    if (s.length === 0) return false;
    if ("+-".includes(s[0])) return validDec(s.slice(1));
    let dotIdx = -1;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ".") {
        if (dotIdx >= 0 || s.length === 1) return false;
        dotIdx = i;
      } else if (!digitsRe.test(s[i])) {
        return false;
      }
    }
    return true;
  };
  
  const validInt = s => {
    if (s.length === 0) return false;
    if ("+-".includes(s[0])) return validDec(s.slice(1));
    for (let i = 0; i < s.length; i++) {
      if (!digitsRe.test(s[i])) return false;
    }
    return true;
  };
  
  const parts = s.toLowerCase().split("e");
  if (parts.length === 1) {
    return validDec(parts[0]);
  } else if (parts.length === 2) {
    return validDec(parts[0]) && validInt(parts[1]);
  } else {
    return false;
  }
};