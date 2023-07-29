/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const digitsRe = /[0-9]/;

  const validNum = (s, numType) => {
    if (s.length === 0) return false;
    if ("+-".includes(s[0])) return validNum(s.slice(1), numType);
    if (numType === "dec") {
      let dotIdx = -1;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === ".") {
          if (dotIdx >= 0 || s.length === 1) return false;
          dotIdx = i;
        } else if (!digitsRe.test(s[i])) {
          return false;
        }
      }
    } else if (numType === "int") {
      for (let i = 0; i < s.length; i++) {
        if (!digitsRe.test(s[i])) return false;
      }
    }
    return true;
  };
  
  const parts = s.toLowerCase().split("e");
  if (parts.length === 1) {
    return validNum(parts[0], "dec");
  } else if (parts.length === 2) {
    return validNum(parts[0], "dec") && validNum(parts[1], "int");
  } else {
    return false;
  }
};