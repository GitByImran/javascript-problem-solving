/*
Task 1 : Create a function that takes a string as input and returns
the reversed version of the string without using the built-in reverse() method.
 */

function doReverse(input) {
  let reversedString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }
  return reversedString;
}
const text = "hello world";
console.log(doReverse(text)); // Output: 'dlrow olleh'

/*
Task 2 : Create a function that takes an array of numbers as input and 
returns the sum of all positive numbers in the array. 
*/

// .................with javascript
function sumPositiveNumber(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sum += input[i];
    }
  }
  return sum;
}

// .................with es6
function sumPositiveNumber2(input) {
  return input.reduce((sum, curr) => (curr > 0 ? sum + curr : sum), 0);
}

const arr1 = [2, -5, 10, -3, 7];

console.log(sumPositiveNumber(arr1)); // Output: 19
console.log(sumPositiveNumber2(arr1)); // Output: 19

/*
Task 3:
Write a JavaScript program to find the most frequent element in 
an array and return it. 
*/

function findMostFrequentElement(input) {
  const elementCount = {};
  let maxCount = 0;
  let mostFrequentElement;

  for (const element of input) {
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }

    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const arr2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(arr2)); // Output: 3

/*
Task 4: Create a function that takes a sorted array of numbers and
a target value as input. The function should find two numbers in 
the array that add up to the target value. Return an array 
containing the indices of the two numbers.
*/

function findNumbers(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        console.log[(i, j)];
        return [i, j];
      }
    }
  }
}

console.log(findNumbers([1, 3, 6, 8, 11, 15], 9)); // Output: [ 0, 3 ]

/*
Task 5: Implement a simple JavaScript calculator. 
The calculator should take two numbers and an operator (+, -, *, /) 
as input and return the result of the operation.
*/

// .................with javascript
function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

console.log(calculator(5, "+", 3)); // Output: 8
console.log(calculator(10, "-", 4)); // Output: 6
console.log(calculator(6, "*", 7)); // Output: 42
console.log(calculator(20, "/", 5)); // Output: 4
console.log(calculator(10, "/", 0)); // Output: Error: Cannot divide by zero
console.log(calculator(3, "$", 2)); // Output: Error: Invalid operator

// .....................with es6
function calculator(num1, operator, num2) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? "Error: Cannot divide by zero" : a / b),
  };

  return operations[operator]
    ? operations[operator](num1, num2)
    : "Error: Invalid operator";
}

console.log(calculator(5, "+", 3)); // Output: 8
console.log(calculator(10, "-", 4)); // Output: 6
console.log(calculator(6, "*", 7)); // Output: 42
console.log(calculator(20, "/", 5)); // Output: 4
console.log(calculator(10, "/", 0)); // Output: Error: Cannot divide by zero
console.log(calculator(3, "$", 2)); // Output: Error: Invalid operator

/*
Task 6: Create a program that generates a random password of a 
specified length. The password should include a mix of uppercase 
letters, lowercase letters, numbers, and special characters.
*/

function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*?";

  const allChars =
    uppercaseChars + lowercaseChars + numericChars + specialChars;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword); // Output: its generate randomly

/*
Task 7: Implement a function that converts a Roman numeral to an integer. 
The function should take a Roman numeral string (e.g., "IX" or "XXI") 
as input and return the corresponding integer value.
*/

function romanToInt(roman) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentSymbol = roman[i];
    const currentValue = romanValues[currentSymbol];

    const nextSymbol = roman[i + 1];
    const nextValue = romanValues[nextSymbol];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
}

console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XXI")); // Output: 21

/*
Task 8: Implement a JavaScript function to find the second smallest 
element in an array of numbers. The function should return the second 
smallest number.
*/
function findSecondSmallest(input) {
  if (input.length < 2) {
    return "Array should contain at least two elements";
  }

  const sortedArr = input.slice().sort((a, b) => a - b);
  return sortedArr[1];
}

const arr4 = [4, 2, 7, 1, 5, 3];
console.log(findSecondSmallest(arr4)); // Output: 2
