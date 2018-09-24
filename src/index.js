module.exports = function longestConsecutiveLength(array) {
  let maxLength = 0;
  if (array.length === 0) return maxLength;

  function getSmalls(num) {
    let counter = 0;
    let idx = array.indexOf(--num);
    while (idx !== -1) {
      counter++;
      array.splice(idx, 1);
      idx = array.indexOf(--num);

    }
    return counter;
  }

  function getBiggers(num) {
    let counter = 0;
    let idx = array.indexOf(++num);
    while (idx !== -1) {
      counter++;
      array.splice(idx, 1);
      idx = array.indexOf(++num);
    }
    return counter;
  }

  //all tricks with the step
  let i = 0;
  let arrLength = array.length;
  while (i < arrLength) {
    let countBig = getBiggers(array[i]);
    let countSmall = getSmalls(array[i]);
    arrLength = (--arrLength - countSmall) - countBig;
    if ((countBig + countSmall ) >= maxLength) {
      maxLength = countBig + countSmall + 1;
    }
    if (maxLength < 2) i += maxLength - 1;
    else i += maxLength;
    array.splice(0,1);
  }

  return maxLength;
};
