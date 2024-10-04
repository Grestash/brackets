module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    if (stack.length !== 0 && bracketsPair[str[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};
