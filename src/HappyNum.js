// Given an arbitrary number return array containing each digit of the number
function singleDigits(num) {
  return num
          .toString()
          .split('')
          .reduce((acc, number) => {
            return acc + Math.pow(number, 2);
          }, 0);
}

export default singleDigits;