// Given an arbitrary number return array containing each digit of the number
function sum(num) {
  return num
          .toString()
          .split('')
          .reduce((acc, number) => {
            return acc + Math.pow(number, 2);
          }, 0);
}

export default sum;