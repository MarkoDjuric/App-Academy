// Log Between Stepper
// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
//The function should print out numbers between min and max at step intervals.
//See the following examples.

function logBetweenStepper(min, max, step) {
   
   let i = min;
   while (i <= max) {    
       i += step;
   }   
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9

logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15


//Array Index Of (*)
//Write a function named wordWithinArray(array,word) using Array.indexOf. 
//The function takes in both a word and an array of words as arguments and returns a boolean that returns true if that string is located inside of the array, or false if it does not.


function wordWithinArray(array, word) {
    // your code here...
   return  array.indexOf(word) > 0
};

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false


//Add To Array - Research
//Write a function that takes a location, either "FRONT" or "BACK" and adds an element to either the front or back of the given array.
//If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array. (Hint: Look up the JavaScript functions: push/pop/shift/unshift)


function addToArray(location, element, arr) {
    // Your code here
if (location === "FRONT") {
  console.log(arr.unshift(element))
}else if (location === "BACK") {
 console.log( arr.push(element)) 
}else if(location === "MIDDLE"){
  console.log("ERROR") 
}
}
testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]


//Reverse String
//Write a function reverseString(str) that takes in a string. The function should return a new string where the order of the characters is reversed.

// your code here
function reverseString(str){
  let revStr = '';
 let i = str.length-1;
  console.log(str[i])
  while (i >= 0) {
     revStr += "" + str[i]
    i--
  }
  return revStr;
}


console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


//Range
//Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max inclusive. 

// your code here

function range(min, max) {
 let start = min;
  let end = max
  rangeArray = [];
  while(start <= end) {
    rangeArray.push(start)
    start ++;
  }
  return rangeArray;
  
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

//My Includes
//Write a function myIncludes(arr, target) that accepts an array and an target value as args. The function should return a boolean indicating whether the target is found in the array. Solve this without Array.includes or Array.indexOf.

let myIncludes = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (target === el) {
            return true;
        }
    }

    return false;
};

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false

//Sum Array Recall
//Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

function sumArray(array) {
    // your code here...
let sum = 0;

for (const value of array) {
  sum += value;
}

return sum;

}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
