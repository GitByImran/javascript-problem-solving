/**
 * Task 1 : Create a function that takes a string as input and returns
 * the reversed version of the string without using the built-in reverse() method.
 **/

function doReverse(input) {
  let reversedString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }
  return reversedString;
}
const text = "hello world";
console.log(doReverse(text));
