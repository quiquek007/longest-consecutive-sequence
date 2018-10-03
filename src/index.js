module.exports = function longestConsecutiveLength(array) {

  let arr = array;
  let maxLength = 0;
  let currentLength = 1;

  arr.sort((a, b) => a - b);
  for(let i = 0, len = arr.length; i < len; i++){
    if (arr[i + 1] !== arr[i]) {
      if (arr[i + 1] === arr[i] + 1) currentLength++;
      else {
        if (currentLength > maxLength) maxLength = currentLength;
        currentLength = 1;
      }
    }
    if ((len - i) < maxLength) break;
  }

  return maxLength;
};
