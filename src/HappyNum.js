// 1. Given a number of undetermined length (1, 12, 123, 4567897)
// 2. only deal with single digit at a time
// 3. square (multiply the number by itself) each number
// 4. add the sum of all nums in a given string of nums together

// Given a number return array containing each digit of the number
function singleDigits(num) {
  return num
          .toString()
          .split('')
          .reduce((acc, number) => {
            return acc + Math.pow(number, 2);
          }, 0);
}

export default singleDigits;