// Log Between Stepper
// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
//The function should print out numbers between min and max at step intervals.
//See the following examples.

function logBetweenStepper(min, max, step) {
   
   let i = min;
   while (i <= max) {    
       i += step;
   }   
};

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
	
};

testArray = [1,2,3]

//Pig Latin Recall
//Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou". 
//Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. 

// So the two rules for our version of Pig Latin are:
// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  
  let vowels = "aeiou";
  let noyayaed = "";
	
  for(let i = 0; i < word.length; i++) {
   if(vowels.includes(word[i])) {
      if (i > 0) {
         return word.slice(i) + word.slice(0,i) + 'ay'
     }else {
     return word + "yay"
   }
  }
  }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]


//Reverse String
//Write a function reverseString(str) that takes in a string. The function should return a new string where the order of the characters is reversed.

function reverseString(str){
  let revStr = '';
 let i = str.length-1;
  console.log(str[i])
  while (i >= 0) {
     revStr += "" + str[i]
	  
  i--
  }
  return revStr;
	
};


console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


//Range
//Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max inclusive. 

function range(min, max) {
 let start = min;
  let end = max
  rangeArray = [];
	
  while(start <= end) {
    rangeArray.push(start)
    start ++;
  }
  return rangeArray;
	
};

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
   let sum = 07

for (const value of array) {
  sum += value;
}

return sum;

};

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

//Factors Of
//Write a function factorsOf(num) that takes in a number as an arg. 
//The method should return an array containing all positive numbers that are able to divide into num with no remainder.

function factorsOf(num) {
  let factors = [];
  let i = 1;
  
  while (i <= num){
    
    if (num % i == 0) {
     factors.push(i) 
    }
    
    i++;
  }
  
  return factors;
};

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]


//My Index Of

let myIndexOf = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (target === el) {
            return i;
        }
    }
    return -1;
};

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


//First Vowel
//Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string.

// your code here
function firstVowel(str) {
  let vowels = "aeiou";
  
  for (let x of str) {
      if (vowels.includes(x)) {
        return x;
      } 
  }
  return null;
  
};


console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null


//Even Numbers
//Write a function evenNumbers(max) that takes in a number as an arg. 
//The function should return an array containing all positive, even numbers that are less than max. 


function evenNumbers(max) {
let arr = [];
 for(let i = 1;  i < max; i++) {
   if (i%2 === 0) {
     arr.push(i)
   }
 }
  
  return arr;
};


console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

//Last Vowel
//Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string.
//Note that the string may contain capitalization. 

let lastVowel = function(str) {
    let vowels = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            return char;
        }
    }

    return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null


//Pit Pat
//Write a function pitPat(max) that accepts a number as an arg. 
//The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.


function pitPat(max) {
  
  let pitArr = [];
  for(let i = 1; i <= max; i++) {
    
   if((i % 4 == 0) || (i % 6 == 0) && !(i % 4 == 0) && (i % 6 == 0)) {
     	pitArr.push(i)
    }
  }
  
  return pitArr;
};


console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

//Remove Last Vowel
//Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

// your code here
function removeLastVowel(word) {
  var index = 1;
  let vowels = 'aeiou';
  let position = 0;
  let firstVowel;
  let secondVowel;
  let reverseIndex = word[word.length - index]; 
  
  while (word.length > index) {
      if(vowels.includes(word[word.length - index])) {
         return word.slice(0,-index) + word.slice(1-index)
      }
	  
   index++ 
  }
                                  
 return word;                                            
};


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'


//Pairs Maker
//Write a function pairsMaker(arr) that takes in a an array as an argument. 
//The function should return a 2D array where the subarrays represent unique pairs of element from the input array.

// your code here
function pairsMaker(arr) {
  let pairsArr = [];
 for(let i = 0; i <arr.length-1; i++) {
   	for(let j = 1; j<arr.length; j++){            
      if(i < j) {
         pairsArr.push([arr[i],arr[j]])
      }
    }

 }
  return pairsArr; 
};

console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]

//Rotate Right
//Write a function rotateRight(array, num) that takes in an array and a number as args.
//The function should return a new array where the elements of the array are rotated to the right num times. 
//The function should not mutate the original array and instead return a new array. 

// your code here
function rotateRight(arr, num) {
  
  let slicedIndex = arr.length - num;
  let rotated = arr.slice(slicedIndex)
  let noRotated = arr.slice(0,arr.length-num)
  	for(let i = 0; i < noRotated.length; i++) {
   		rotated.push(noRotated[i]) 
 	}
  
  return rotated;
};

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]


//Two Dimensional Sum
//Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.

// your code here
function twoDimensionalSum(arr) {
  let sum = 0;
 for(let i = 0; i < arr.length; i++) {

   for(let k = 0; k < arr.length; k++) {
     //console.log(sum)
     if(arr[i][k]!==undefined){
     sum += arr[i][k]
       
     }
     
   }
 
 }
  return sum;
};


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
//console.log(twoDimensionalSum(arr2)); // 6

//Pig Latin Recall
//Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou". 
//Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. 


// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  // your code here...
  let vowels = "aeiou";
  let noyayaed = "";
  for(let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
       if (i > 0) {
         return word.slice(i) + word.slice(0,i) + 'ay'
       }else {
     return word + "yay";
    }
  }
  }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

//Least Common Multiple
//Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.


function leastCommonMultiple(num1, num2){
  
  let counter = 1;
  let least = true;
  	while(least) {
      if ((counter%num1 === 0) && (counter%num2 === 0)) {
         return counter      
      } else {
       counter++ 
      }
    }
};


console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

//Array Sum
//Write a function sumArray(arr) that accepts an array as an arg. The function should return the total sum of all values in the array.



function sumArray(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
    
  }
  return sum
}

console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0

//Avg Val
//Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array. If the array is empty, it should return null.


function avgVal(arr) {
	let num = arr.length;
  let avg = 0;
  
      if (arr.length === 0) {
        return null;
      }
  
 for(let i = 0; i < arr.length; i++) {
   
     avg += averageNum(arr[i])
 }
  return avg / num
}

function averageNum(sum) {
  let allSum = 0; 
  
  allSum += sum;
  return allSum;
};


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

//My Index Of Recall
//Write a function myIndexOf(arr, target) that takes in an array and target value as args. 
//The function should return the first index where the target is found in the array. 
//If the target is not found, it should return -1. Solve this without using Array.indexOf.



function myIndexOf(arr, target) {
 
  for(let i = 0; i < arr.length; i++) {
   		let char = arr[i]; 
        if(char === target){
          return i
        }
  }
  return -1;
};



console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


//Tripler
//Write a function tripler(nums) that takes in an array as an arg. The function should return a new array containing three times every number of the original array.


function tripler(nums) {
 	let tripleArr = [];
  for(let i = 0; i < nums.length; i++) {
          tripleArr.push(nums[i] * 3);
  }
  
  return tripleArr;
};


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


//Long Words
//Write a function longWords(words) that takes in an array of words. 
//The function should return an array containing only the words that are longer than 5 characters.


function longWords(words) {
  let longArr = [];
  for(let i = 0; i < words.length; i++) {
      if(words[i].length > 5) {
       	 longArr.push(words[i]); 
      }
  }
  return longArr;
};


console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]


//Remove E Words
//Write a function removeEWords(sentence) that accepts a sentence string as an arg. 
//The function should return a new string, containing only the words that don't have the letter "e" in them.


function removeEWords(sentence) {
  
 let str = "";
 let strToArray = sentence.split(" ");
  
  for(let i = 0; i < strToArray.length; i++) {
    let char = strToArray[i]
         if(!char.includes('e')) {
           str += char + " ";           
         }    
  } 
  return str;
};


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

//Max Value
//Write a function maxValue(nums) that takes in an array of numbers as an arg. 
//The function should return the largest number of the array. If the array is empty, the function should return null.


function maxValue(nums) {
	let el = nums[0];
  	if(nums.length == 0) {
     return null 
    }else {
      for(let i = 1; i < nums.length; i++) {
       	  if(nums[i] > el) {
            el = nums[i]; 
           }
      } 
    }
  return el;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null

//Reverse Sentence
//Write a function reverseSentence(sentence) that takes in a sentence as an arg. The function should return a new sentence where the order of the words is reversed. Note that you should reverse the order among words, not the order among characters.

// your code here
function reverseSentence(sentence) {
  let reversed = [];
  let senArr = sentence.split(" ");
  
 	for(let i = 3; i >= 0 ; i--) {
      reversed.push(senArr[i]);
    }
  
  return reversed.join(" ");
  
};


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

//Initials
//Write a function initials(name) that accepts a full name as an arg. The function should return the initials for that name.

// your code here
function initials(name) {
 let nameArr = name.split(' ');
 let initArr = [];
 for(let i = 0; i < nameArr.length; i++) {
    
   initArr.push(nameArr[i][0].toUpperCase())
 }
  
  return initArr.join("");
  
};



console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'


//Two Dimensional Product
//Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.

let twoDimensionalProduct = function(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        for (let j = 0; j < subArr.length; j++) {
            let num = subArr[j];
            product *= num;
        }
    }

    return product;
};

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88


//Popper
//Write a function popper(array, num) that takes in an array and a number as args. The function should remove the last num elements from the array, mutating the original array. The function should return a new array containing the elements that were removed. 


// your code here
function popper(array, num) {
    let index = array.length
 	let spliced = array.splice(index-num)  
    let reversed = [];
    let i = 0;
              
  while(i < spliced.length) {
      reversed.push(spliced[i])
                
    i++
  }
  
  return reversed
};





let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]


//Choose Primes
//Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!

// your code here
function choosePrimes(nums) {
  
  let primes = [];
  for(let i = 0; i < nums.length; i++) {
    
  if(prime(nums[i])){
    
   primes.push(nums[i]) 
  }
    
  }
  
  return primes;
}

function prime(num) {
 if(num < 2) return false;  
 
  for(let i = 2; i < num; i++) {
   if(num%i === 0) {
    return false 
   }   
  }
  return true;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]


//Fizz Buzz Recall
//Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

// your code here
function fizzBuzz(max) {
 	let fizz = [];
  
  for(let i = 1; i < max; i++) {
  		if((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
          
          	fizz.push(i);
        }
  }
  
  return fizz;
};


console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

//Longest Word
//Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence.



function longestWord(sentence) {
	let sentArr = sentence.split(" ");
    let counter = sentArr[0];
  for(let i = 1; i < sentArr.length; i++) {
    if(counter.length < sentArr[i].length){
       counter = sentArr[i];
    }
  }
  
  return counter;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

//Abbreviate
//Write a function abbreviate(word) that takes in a string arg. The function should return a new string where all of its vowels are removed.



function longestWord(sentence) {
	let sentArr = sentence.split(" ");
    let counter = sentArr[0];
  for(let i = 1; i < sentArr.length; i++) {
    if(counter.length < sentArr[i].length){
       counter = sentArr[i];
    }
  }
  
  return counter;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''


//Product Array
//Write a function productWithReduce(nums) that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array.


function productWithReduce(nums) {
 
  let product = 1;
  
  for(let i = 0; i < nums.length; i++) {
   product *= nums[i];
  
  }
  
  return product;

}
console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12

//Remove Last Vowel Recall
//Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

// your code here
function removeLastVowel(word) {
  
 let last = "";
 let vowels = "aeiou";
  let i = word.length;
let index = 1;
  let rev = '';
  while(i > 0) {
    index++;
    console.log(index)
    if(vowels.includes(word[i])) {
       
    break   
    }else {
      if(word[i]!== undefined){
         rev = word[i] + rev; 
      }
    }
    i--
  }
  
return word.slice(0,index) + rev
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'


//Abbreviate Words
/Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.

function abbreviateWords(sentence){
  
 let abbsent = [];
 let vowels = "aeiou"; 
 let sentArr = sentence.split(" ");
  for(let i = 0; i < sentArr.length; i++) {
      if(sentArr[i].length > 4) {
      	abbsent.push(deleteVowel(sentArr[i]))
      }else {
       abbsent.push(sentArr[i]); 
      }
  }
  return abbsent.join(" ");
}

function deleteVowel(char){
 let deleted = "";
 let vowels = "aeiou";
  for(let i = 0; i < char.length; i++) {
        if(!vowels.includes(char[i])){
           deleted +=  char[i];
        }
  }

  return deleted;
};

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

//Contains Word
//Write a function containsWord(sentence, targetWord) that accepts two strings as args.
//The function should return a boolean indicating whether the targetWord is found inside of the sentence. Solve this without using String's indexOf() or includes() methods.


function containsWord(sentence, targetWord) {
  
 let sentarr = sentence.split(" ");
 
  for(let i = 0; i < sentarr.length; i++) {
    let element = sentarr[i];
     if(element.toLowerCase() === targetWord) {
        return true 
     }
    
  }
  return false
};



console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

//Uncompress
//Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return a the uncompressed version of the string. See the examples. 


function uncompress(str) {
let compress= "";

  for(let i = 0; i < str.length; i++) {
  	let char = str[i];
    let num = str[i+1];
   		compress +=  wordPow(char,num)
   }
   
  return compress
}


function wordPow(char, num) {
 let str = "";
 let numeric = Number(num);
  for(let i = 0; i < numeric; i++) {
   str += char; 
    
  }
  return str;
};


console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'


//Hipsterfy
//Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing it's last vowel.


function hipsterfy(str) {
let strev = "";
  let hippsterStr = " ";
let strArr = str.split(" ");
  console.log(strArr)
let vowels = "aeiou";
let counter = 0;

  
  for(let i = 0; i < strArr.length; i++) {
        strev = reverse(strArr[i]);
        counter = indexFinder(strev);
    	hippsterStr = strev.slice(0,counter) + strev.slice(counter+1) + " " + hippsterStr;
  }
  return reverse(hippsterStr);
}


  function reverse(str) {
    let reversed = "";
    let i = 0;
    while(i < str.length) {
      reversed = str[i] + reversed
      i++
    }
    return reversed;
  }
  
function indexFinder(arr) {
  let vowels = "aeiou";
  for(let i = 0; i < arr.length; i++) {
      if(vowels.includes(arr[i])) {
           return arr.indexOf(arr[i]); 
        }
  }
}

 
console.log(hipsterfy('wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('pmactoob')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'


//Least Common Multiple Recall
//Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.


function leastCommonMultiple(num1, num2) {
 
  let i = 1;
  let arr = [];
  let loop = true;
  
  while(loop) {
    if(i%num1 === 0 && i%num2 === 0) {
      
     	 loop = false;
      break
    }
    i++;
   }
  return i;
}


console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

//Rotate
//Write a function rotate(array, num) that takes in an array and a number as args. When the num is positive, the elements of the array should be rotated to the right. When the num is negative, the elements of the array should be rotated to the left. The function should mutate the original array. 



function rotate(array, num) {
  let poped;

     if(num > 0) {

       for(let i = 1; i <= num; i++){
        
         poped =  array.pop();
         array.unshift(poped);
      }
  } else {
    
           for(let i = 0; i < -(num); i++){

             let p = array.shift();
              array.push(p);
          }
    
        }
   
return array
};



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]


//Addition Mutator
//Write a function additionMutator that accepts an array and a number as an arguments. 
//The function should mutate the input array such that every element has the given number added to it.


function additionMutator(nums, num) {
  for(let i = 0; i < nums.length; i++) {
   nums[i] += num;  
  }
  return nums;
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]


//Alternating Words
//Write a function alternatingWords that accepts an array of words as an argument. The function should mutate the input array such that the words alternate between fully uppercase or lowercase. The first word should be uppercase.


function alternatingWords(array) {
  
 for(let i = 0; i < array.length; i++) {
   
  	if(array[i][1] === array[i][1].toUpperCase()) {
    	array[i] = array[i].toLowerCase(); 
   		 
  	}else if(array[i][1] === array[i][1].toLowerCase()) {
    	array[i] = array[i].toUpperCase(); 
    }
   
 }
  
  return array
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

//Repeating Translate
// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

function repeatingTranslate(sentence) {
  let array = sentence.split(" ");
  let vowels = 'aeiou';
  let sent = " ";
  
  for(let i = 0; i < array.length; i++) {
  		if(array[i].length > 2) {
         	sent += isVowel(array[i])
        }else {
         sent += array[i] + " ";
        }
  }
  
	return sent
}

//Helper functions
function isVowel(word) {
  let vowels = 'aeiou';
  let ind;
  if(vowels.includes(word[word.length-1])) {
    
   		return word + word + " "; 
    
  }else {  
     ind = indexVowel(word);
    return 	word + word.slice(ind) + " ";
  }
  
} 

function indexVowel(char) {
  let vowels = 'aeiou';
 let i = char.length;
  console.log(i)
  while(i >= 0){
    if(vowels.includes(char[i])) {
    break  
       
    }
    
   i--; 
  }
  return i;
}
  
   
console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

//Max in Matrix
//Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.

function maxInMatrix(matrix) {
  // your code here...
  let largest = 0;
  let count = 0;
  
  
  for(let i = 0; i < matrix.length; i++) {
             console.log(matrix[i])
			let arr1 = matrix[i] 
   		for(let k = 0; k < arr1.length; k++) {
          count = arr1[k]
          if(largest < count) {
           largest = count; 
          }
        }
  }
  return largest
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72

//Max in Columns
//Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. The array length should be equal to the number of columns, such that returnArrayi is equal to the max value in the ith column.

function maxColumn(matrix) {
  // your code here...
  
  let tempArr = [];
  let arrMax = [0];
  let j = matrix.length;
  let ind = 0;
  let kind = 0;

  while(j > 0) {

  	for(let i = ind; i < matrix.length; i++) {
             
			let arr1 = matrix[i]
            //console.log(matrix[i][kind])
      if(matrix[i][kind] > arrMax[0]) {
          arrMax[0] = matrix[i][kind]
        //console.log(arrMax[0])
      }
     // console.log(arrMax)

   }
      tempArr.push(arrMax[0])

    kind +=1

  j-- 
}
  return tempArr
};
matrix = [[ 5,  9, 21],
[ 9, 19,  6],
[12, 14, 15]]


matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
[21, 15, 19, 10]]

//Lucky Numbers (*)
//Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.


function maxColumn(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const minColumns = [];
  const maxRows = [];
  
  for (let col = 0 ; col < width ; col++) {
    let rowMax = matrix[0][col];
    
        for (let i = 1 ; i < height; i++) {
      
        if (matrix[i][col] > rowMax) {
            rowMax = matrix[i][col];
        }
    }
    maxRows.push(rowMax)
  }

  
    for (let col = 0 ; col < height ; col++) {
   		 let colMax = matrix[col][0];

      	for (let row = 1 ; row < width ; row++) {
          //console.log(matrix[col][row])
            if (matrix[col][row] < colMax) {
                colMax = matrix[col][row];
            }
       }
         
      minColumns.push(colMax);

    }
  return luckyFinder(minColumns, maxRows)
  

}


function luckyFinder(minColumns, maxRows) {
  
  
 for(let k = 0; k < minColumns.length; k++) {
		for(let j = 0; j < maxRows.length; j++) {
         		if(minColumns[k] === maxRows[j]) {
                  // console.log(minColumns[k]) 
                  return minColumns[k];
                }
        }
  }
    
}


matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
         [21, 15, 19, 10]]

console.log(maxColumn(matrix)); // [12, 19, 21]


//Yeller
//Write a function yeller(words) that takes in an array of words. The function should return a new array where each element of the original array is yelled.


function yeller(arr) {
  
 let yellArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    yellArr.push(arr[i].toUpperCase()+ "!")
  }
  
  return yellArr;
}


console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

//Choosey Endings
//Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. The function should return a new array containing the words that end in the given suffix. If the value passed in is not an array, return an empty array. HINT: There are built in JavaScript functions that will help with determining if a strings ends a certain way. Go see if you can find it on MDN!

let chooseyEndings = function(words, suffix) {
  if (!Array.isArray(words)) {
    return [];
  }

  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.endsWith(suffix)) {
      filteredWords.push(word);
    }
  }

  return filteredWords;
};


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]


//Common Factors
//Write a function commonFactors that accepts two numbers as arguments. 
//The function should return an array containing positive numbers that are able to divide both arguments.


function commonFactors(num1, num2) {
  let cmf = [];
  let counter = 0;
  if(num1 > num2) {
    	counter = num1;
  }else{
      counter = num2;
    }
  
  
 let i  = 1;
  while(i <= counter) {
    if(num1%i === 0 && num2%i === 0 ) {
    	cmf.push(i)  
    }
    i++;
  }
    return cmf
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]

//Has Double Letter
//Write a function hasDoubleLetter(str) that accepts a string. The function should return a boolean indicating whether the string contains two of the same character consecutively. If the value passed into the function is not a string, return null.


function commonFactors(num1, num2) {
  let cmf = [];
  let counter = 0;
  if(num1 > num2) {
    	counter = num1;
  }else{
      counter = num2;
    }
  
  
 let i  = 1;
  while(i <= counter) {
    if(num1%i === 0 && num2%i === 0 ) {
    	cmf.push(i)  
    }
    i++;
  }
    return cmf
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]

//First and Last
//Write a function firstAndLast that takes in an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array, then the function should return the difference between the first and last elements of the array.


function firstAndLast(arr) {
  	let	first = arr[0];
   	let last = arr[arr.length-1];
  if(arr.length%2 !== 0) {
   		return first - last 
    
  }else {
  		 return first + last 
  }  
  
}


console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4

//Adjacent Sums
//Write a function adjacentSums that accepts an array of numbers as an argument. The function should return a new array containing the sum of each pair of elements in the input array.


function adjacentSums(arr) {
  let sum = [];
 for(let i = 0; i < arr.length; i++) {
   if(i < arr.length-1)
  		 sum.push(arr[i] + arr[i+1])
 }
  return sum 
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]


//Double Sequence
//Write a function doubleSequence that accepts a base and a length as arguments. The function should return an array representing a sequence that contains "length" elements. The first element of the sequence is always the "base", the subsequent elements can be generated by doubling the previous element of the sequence.


function doubleSequence(base, length) {
  
  let arr = [];
  
  for(let i = 1; i <= length; i++) {
   		arr.push(base * i) 
  }
  
  return arr;
}


console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]

//Dynamic Fizz Buzz
//Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.


function doubleSequence(base, length) {
  
  let arr = [];
  
  for(let i = 1; i <= length; i++) {
   		arr.push(base * i) 
  }
  
  return arr;
}


console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]

//Reverb
//Write a function reverb that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.


function reverb(str) {
  if(typeof str !== 'string') {
   return null;    
  }
  let vowels = 'aeiouAEIOU';
  
  let i = str.length; 
  while(i >= 0) {
    if(vowels.includes(str[i])) {
     return str + str.slice(i)
    }
    
    i--;
  } 
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null


//Pair Product
//Write a function pairProduct that accepts an array of numbers and a product as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.


function pairProduct(arr, num) {
  
 for(let i = 0; i < arr.length; i++) {
   for(let j = i + 1; j < arr.length; j++) {
     if(arr[i] * arr[j] === num) {
      return true; 
     }
     
   }
  		  
 }
   
  return false;
}

console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false

//Snake to Camel
//Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. snakecase is where each word is separated with underscores (``). PascalCase is a string where the first char of each word is capital, all other chars lowercase.


function snakeToCamel(str) {
  let array = str.toLowerCase().split("_");
  let camel = " ";
  for(let i = 0; i < array.length; i++) {
   	 camel += array[i][0].toUpperCase() + array[i].slice(1);
    
  }
  
 return camel
  
}; 


console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

//Strange Sums
//Write a function strangeSums that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

function strangeSums(arr) {
  
 let count = 0;
  for(let i = 0; i < arr.length; i++) {
   		for(let j  = i + 1; j < arr.length; j++) {
          if(arr[i] + arr[j] === 0) {
                 count += 1;
      	  }
      	}
  }
  
  return count;
}

console.log(strangeSums([2,-3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0


//Triplet True
//Write a function tripletTrue that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.


function tripletTrue(str) {
      	let caracter = 0;

  for(let i = 0; i < str.length; i++) {

		for(let j = i+1; j < str.length; j++) {
   				if(str[j] === str[i]) {
                   caracter += 1
                  	if(caracter === 3) {
                     return true 
                    }
                }
        }
  }
  
  
  return false
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false


//Three Increasing
//Write a function threeIncreasing that accepts an array of numbers as an argument. The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.


function threeIncreasing(arr) {
  let counter = 0;
    for(let i = 0; i < arr.length; i++) {
          console.log(arr[i])

		for(let j = i+1; j < arr.length; j++) {
         // console.log(arr[j])
   				if((arr[j]-arr[i] === 1) && (arr[j+1]-arr[j] === 1)) {
                     return true 
                } 
        }	
  }
  
  	return false
};


console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false


//Zip
//Write a function zip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

// Your code here
function zip(nums, strings) {
  
 			let zipped = [];
			let combo = [];	
    let i = 0;
  	let j = 0;
  
  while(i < nums.length) {
    
   zipped.push([nums[i],strings[i]])
    
    i ++;
    j ++;
  }
  
  return zipped;
  
};


console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//Unique
//Write a function unique that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.

// Your code here
function unique(arr) {
  let uniq = [];
  uniq.push(arr[0]);	
  for(let j = 1 ; j < arr.length; j++) {
      if(!uniq.includes(arr[j])) {
          uniq.push(arr[j])
        }
   }
  
  return uniq;
};


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

//Zany Zip
//Write a function zanyZip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.

let zanyZip = function(array1, array2) {
    let zipped = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        let el1 = array1[i];
        let el2 = array2[i];
        if (el1 === undefined ) {
            el1 = null;
        }
        if (el2 === undefined) {
            el2 = null;
        }
        zipped.push([el1, el2]);
    }
    return zipped;
};

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//Silly Strings
//Write a function sillyString that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

let sillyString = function(word) {
    let vowels = "aeiou";
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (vowels.includes(char)) {
        newWord += char + "b" + char;
      } else {
        newWord += char;
      }
    }
    return newWord;
};

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber


//More Dot Less Dash
//Write a function moreDotLessDash that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).

function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dotCount++;
        } else if (str[i] === '-') {
            dashCount++;
        }
    }
    return dotCount > dashCount;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

//Next Prime
//Write a function nextPrime that accepts a number as an argument. The function should return the nearest prime number that is greater than the given number.

let nextPrime = function(num) {
    let i = num;
    while (true) {
        i++;
        if (isPrime(i)) {
            return i;
        }
    }
};

let isPrime = function(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

//Matrix Addition
//A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices as arguments. 
//The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments.
//To add matrices, we add the values at the same positions.


function matrixAddition(mxA, mxB) {
  let sum = [];
  for(let i = 0; i < mxA.length; i++ ) {
        let first = mxA[i].length;
                sum.push([]);
        for(let k = 0; k < first; k++ ) { 
        	  sum[i].push(mxA[i][k] + mxB[i][k]);
          }
     }
    
  return sum;
}


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]


//Is Perfect Square
//Write a function isPerfectSquare that accepts a number as an argument. 
//The method should return a boolean indicating whether or not the argument is a perfect square.
//A perfect square is a number that is the product of some number multiplied by itself.
//For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares; 35 is not a perfect square.

let isPerfectSquare = function(n) {
    for (let i = 1; i <= n; i++) {
        if (i * i === n) {
            return true;
        }
    }
    return false;
};

console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false

//Prime Factors
//Write a function primeFactors that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.

// Your code here
function primeFactors(num) {
 let array = [];
  
  for(let i = 2; i <= num; i++) {
  	let prime  =  isPrime(i);
    if(num % prime === 0) {
    array.push(prime)  
    }
    
  }
  
  return array;
  
}

function isPrime(num) {
  let i = 2;
  while(i < num) {
    
    if(num % i === 0) {
       return false;
    }

  i ++
 }

   return num
}
console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
//console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
//console.log(primeFactors(35));  // [5, 7]
//console.log(primeFactors(49));  // [7]
//console.log(primeFactors(128)); // [2]


//Prev Prime
//Write a function prevPrime that accepts a number as an argument. The function should return the nearest prime number that is smaller than the given argument. Since 2 is the smallest prime number, return null if no number can be returned.

let prevPrime = function(n) {
    if (n <= 2) {
        return null
    }
    let i = n - 1;
    while (true) {
        if (isPrime(i)) {
            return i;
        }
        i--;
    }
};

let isPrime = function(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null


//Has Three Vowels (*)

function hasThreeVowels(str) {
  
 let counter = 0;
 let vowels = 'aeiou';
 let char = "";
  
  for(let i = 0; i < str.length; i++) {
  		if(vowels.includes(str[i]) && !(char.includes(str[i]))) {
          		char += str[i];
         		counter += 1; 
        }
  }
  
  return counter === 3 || counter > 3;
  
}  


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

//Fibonacci Sequence
//Write a function fibonacciSequence that accepts a number as an argument. The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.

function fibonacciSequence(num) {
  	if (num === 0) {
    	    return []; 
  	}else if (num === 1) {
   	   return [1]; 
        }
  
 	let fib = [1,1];
        let sum = 0;
	for(let i = 0; i < num-2; i++) {
        sum = fib[i] + fib[i + 1]
      	fib.push(sum);
        }
      
    return fib
};


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]


//Is Anti Prime

//Write a function isAntiPrime that accepts a number as an argument. 
//The method should return true if the given number has more divisors than all positive numbers less than the given number. 
//For example, 24 is an anti-prime because it has more divisors than any positive number less than 24.

let isAntiPrime = function(n) {
    let factorsOfN = numFactors(n);

    for (let i = 1; i < n; i++) {
        if(factorsOfN <= numFactors(i)) {
            return false
        }
    }

    return true;
};

    let numFactors = function(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
      
    return count;
};


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false


//Pyramid Array
//Write a function pyramidArray(base) that takes in an array of numbers representing the base of a pyramid. The function should return a two-dimensional array representing the completed pyramid. To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right.

// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
function pyramidArray(arr) {
let arrorg = arr
    let pyramid = [];
    let spliced = arr;    
        
        for(let k = 0; k < arr.length-1; k++) {
            pyramid.push(pyramidSum(spliced))
			spliced = pyramid[k]
        }

    return pyramid
}


function pyramidSum(array) {
  let sum = [];
  let l = 1;
  for (let i = 0; i < array.length-1; i++) {
    const element = array[i];
    sum.push(element + array[l])
    l++;
  }
  
  return sum;
}



let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]


//Fib
//Write a function fib that accepts a number n as an argument. The function should return the "n-th" number of the Fibonacci sequence. 
//The first two numbers of the Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci sequence, we take the sum of the previous two numbers of the sequence.


// Your code here
function fib(num) {
  
  if(num === 1) {
   return 1; 
    
  }
  
  
 let first = 1;
 let last = 1;
 let count = 1;
  
  for(let i = 1; i < num-1; i++) {
    
   count = first + last;
    first = last;
    last = count; 
  }
  
  return count;
  
}


console.log(fib(1));    // 1
console.log(fib(2));    // 1
console.log(fib(3));    // 2
console.log(fib(4));    // 3
console.log(fib(5));    // 5
console.log(fib(6));    // 8
console.log(fib(10));   // 55
console.log(fib(11));   // 89
console.log(fib(12));   // 144


//Pascal's Triangle
//Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1. 
//To generate further levels of the pyramid, every element is the sum of the element above and to the left with the element above and to the right. 
//Non-existing elements are treated as 0 when calculating the sum. 


function pascalsTriangle(num) {
        let pascals = [[1],[1,1]];
     	 let next = [1,1];
let k = 1;
   	 let i = 0;
  let spliced = []


  if(num == 1) {
    return [1];
  }else if(num == 2) {
    return [1,1];
  }
  
  while(i < num - 2) {
    let addelement = adjacentSums(pascals[k]);
    let triangled = firstlast(1,addelement,1) 
		pascals.push(triangled)    
        k ++; 
        i ++; 
  }

  return pascals
}

 	 function adjacentSums(next) {
		let arr = next;
   		let sums = [];
	
    for(let i = 0; i < arr.length - 1; i++) {
      let sum = arr[i] + arr[i + 1]
      sums.push(sum);
    }
     
    return sums
  };

function firstlast(first, addelement, last) {
  	let trngl = [];
  	trngl.push(first);
  for(let k = 0; k < addelement.length; k++) {
    	trngl.push(addelement[k])
  }
  		trngl.push(last)
  
  return trngl;
}

 
console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]

//Most Expensive Groceries
//You are compiling a price checker for a grocery store. The grocery prices are as follows:
//butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5
//First, create a function called costOfGroceries(groceries) which takes a single array of grocery items and returns the total cost.

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
  	let sum = 0;
  	let cheese = 5;
  	let eggs = 2;
  	let butter = 1;
  	let milk = 3;
  	let bread = 4;
  
    for(let i = 0; i < groceries.length; i++) {
		if(groceries[i] === 'cheese') {
              	sum += 5; 
        }else if(groceries[i] === 'eggs') {
            	sum += 2; 
        }else if(groceries[i] === 'butter') {
          		sum += 1; 
        }else if(groceries[i] === 'milk') {
             sum += 3; 
        }else if(groceries[i] === 'bread') {
         		sum += 4; 
        }     
    }
  return sum;
}


function mostExpensiveGroceries(groceriesList) {
    			let value = 0;

  	for(let i = 0; i < groceriesList.length; i ++) {
      
		for(let k = 0; k < groceriesList[i]; k++) {
          
          
          let firstValue = groceriesList[i][k];
          
            if(groceriesList[i][k] === 'cheese') {
                    value = 5; 
              	if(value > firstValue) {
                    firstValue = value  
                }
            }else if(groceriesList[i][k] === 'eggs') {
                    value = 2;
              	if(value > firstValue) {
                    firstValue = value  
                }
            }else if(groceriesList[i][k] === 'butter') {
                    value = 1;
              	if(value > firstValue) {
                    firstValue = value  
                }
            }else if(groceriesList[i][k] === 'milk') {
                 	value = 3; 
              	if(value > firstValue) {
                    firstValue = value  
                }
            }else if(groceriesList[i][k] === 'bread') {
                    value = 4; 
              	if(value > firstValue) {
                    firstValue = value  
                }
            }
          
        }   
    }
  return value;
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");



//Echo Recall
//Write a function echo that takes in a string and console.logs that string "echo-ized".

function echo(string) {
  console.log(string.toUpperCase()  + " ... " + string  + " ... " + string.toLowerCase() );
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"


//Vowel Counter Recall
//Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
//Vowels are the letters "a", "e", "i", "o", "u".

function countVowels(word) {
 const vowels = "aeiou";
 let counter = 0;
 
 for(let i = 0; i < word.length; i++) {
     let el =  word[i];
    if (vowels.includes(el)) {
        counter += 1;
    } 
 }
 return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2


//Sum Array Recall
//Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

function sumArray(array) {
    let counter = 0;
    for(let i = 0; i < array.length; i ++) {
        counter += array[i]; 
    }
    return counter;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

//Pig Latin Recall
//Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel
// you simply add "-yay". Vowels are "aeiou".


function pigLatinWord(word) {
    const vowels = "aeiou";
    let frstSent = word[0];
    let secSent = word[1];
    let indexVowel = 0;
    
    if (vowels.includes(frstSent)) {
        return word + "yay"
    } else {
           for(let i = 0 ; i < word.length; i++) {
                let el = word[i];
               if(vowels.includes(el)) {
                   return word.slice(i) + word.slice(0,i) + "ay";
               }
                
           }
   }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"


//My Index Of Recall
//Write a function myIndexOf(arr, target) that takes in an array and target value as args. 
//The function should return the first index where the target is found in the array.
//If the target is not found, it should return -1. Solve this without using Array.indexOf.


function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        } 
    }
    return -1;
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


//Two Sum Recall
//Write a function twoSum(arr, target) that accepts an array and a target number as args. 
//The function should a return a boolean indicating if two distinct numbers of the array add up to the target value.
//You can assume that input array contains only unique numbers.

// your code here
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 + num2 === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false


//Uncompress Recall
//Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. 
//The function should return the uncompressed version of the string. 

function uncompress(str){
    let uncompressed = '';
    let len = str.length;
    let num;
    
    for(let i = 1; i < len; i+=2) {
        let char = str[i-1]; 
        for(let j = 0; j < str[i]; j++){
            uncompressed += char;
        }
    }
    return uncompressed;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'


//Hipsterfy Recall
//Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.


function hipsterfy(str){
    let array = str.split(" ");
    let newStr = '';
    
    for(let i = 0; i < array.length; i++){
        let idx = lastVowel(array[i]);
        let removed = removeLastVowel(array[i],idx);
        newStr += removed + " ";
    }
    
    function lastVowel(str){
         let vowels = 'aeiou';
         for(let i = 0; i < str.length; i++){
             let char = str[str.length - i]; 
            if(vowels.includes(char)){
                return str.length - i;
            }
         }
    }
    
    function removeLastVowel(elem,idx){
        let str = '';
        for(let i = 0; i < elem.length; i++) {
            if(i != idx){
                str += elem[i]
            }
        }
        return str;
    }
    
    return newStr;
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

//Repeating Translate Recall
// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?


function repeatingTranslate(str){
    let array = str.split(" ");
    let repeatingStr = '';
    for(let i = 0; i < array.length; i++) {
        if(array[i].length >= 3) {
            repeatingStr += removeLast(array[i]) + ' '
        } else {
            repeatingStr += array[i] + ' ';
        }  
    }
    
     function removeLast(str){
        let vowels = 'aeiou';
        let lastChar = str[str.length-1];
        let tripledStr = '';
        let noTripledStr = '';
        if(vowels.includes(lastChar)){
            for(let i = 0; i < 2; i++){
                tripledStr += str;
            } 
            return tripledStr;
        }
            for(let j = 0; j < str.length; j++){
                    if(vowels.includes(str[str.length - j])){
                          return  noTripledStr = str + str.slice(str.length-j);
                    }
            }
    }
    return repeatingStr;
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"


//Two Dimensional Sum

//Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.

function twoDimensionalSum(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr1[i].length; k++) {
            sum += arr1[i][k];
        }
    }
    
    return sum;
};

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

//Two Dimensional Product
// Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.

function twoDimensionalProduct(arr1) {
    let sum = 1;
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr1[i].length; k++) {
            sum *= arr1[i][k];
        }
    }
    
    return sum;
};

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

// Max in Matrix
// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.

function maxInMatrix(matrix) {
    let val = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] >= val) {
                val = matrix[i][k];
            }
        }
    };
    
    return val;
}

matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72


//Max in Columns
//Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column.
//The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.




function maxColumn(matrix) {
  let len = matrix.length;
  let maxNumbers = [];
  let firstMatrixNumber = matrix[0][0];
  
  for(let i = 0; i < len; i++) {
      
    for(let j = 0; j < len; j++) {
          console.log(matrix[j][i])
          if (firstMatrixNumber < matrix[j][i]) {
              firstMatrixNumber = matrix[j][i];
          }
   }
    maxNumbers.push(firstMatrixNumber)   
  }
    return maxNumbers;
}

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]] 

console.log(maxColumn(matrix));  // [12, 19, 21]




//Matrix Addition
//A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". 
//The function should return a new matrix representing the sum of the two arguments. 
//To add matrices, we add the values at the same positions.



function matrixAddition(matrix1, matrix2) {
    let matrixedArr = [];
    let resault =  [];
    for(let i = 0; i < matrix1.length; i++) {
        for(let j = 0; j < matrix1[i].length; j++) {
           sum = matrix1[i][j] + matrix2[i][j]
           resault.push(sum);
        }
     
     matrixedArr.push(resault);
     resault =  [];
    }
    return matrixedArr
}


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]



// Zip
//Write a function zip that accepts two arrays as arguments. 
//The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays.
//You may assume that the input arrays have the same length.

let zip = function(array1, array2) {
    let zipped = [];
    for (let i = 0; i < array1.length; i++) {
        let el1 = array1[i];
        let el2 = array2[i];
        zipped.push([el1, el2]);
    }
    return zipped;
};

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]



//Lucky Numbers
//Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. 
//A lucky number is the minimum element in its row and the maximum in its column.

function luckyNumbers(matrix) {
  let minNumbers = [];
  let maxNumbers = [];
  let sizeOfArray = matrix.length;
  let sizeOfSubArray = matrix[0].length;
  let longerLen;
  
  for(let i = 0; i < sizeOfArray; i++){
    let firstEl = matrix[i][0];
      for(let j = 1; j < sizeOfSubArray; j++){
        firstEl = Math.min(firstEl,matrix[i][j])      
     }  
    minNumbers.push(firstEl);  
  }


  for(let k = 0; k < sizeOfSubArray; k++){
    let firstEl = matrix[0][k];
      for(let y = 1; y < sizeOfArray; y++){
        firstEl = Math.max(firstEl,matrix[y][k])      
     }  
    maxNumbers.push(firstEl);  
  }

    if (maxNumbers.length > minNumbers.length) {
        longerLen = maxNumbers.length;
    }else {
        longerLen = minNumbers.length;
    }

        for (let i = 0; i < longerLen; i++) {
            if (maxNumbers.includes(minNumbers[i])) {
                return minNumbers[i];
            }
        }
 
}

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix));// [10] 


//Spiral Matrix
//Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.


function spiralOrder(matrix) {
  
  
  let sizeOfMatrix = matrix.length;
  let sizeOfSubMatrix = matrix[0].length;
  let spiralArray = [];
  let frtsSpliced = [];
  let secondSpliced = [];
  
        
    for (let k = 0; k < sizeOfSubMatrix-1; k++) {
        
        spiralArray.push(matrix[k].splice(-1)[0]);
       
    }
  
  let noArrMatrix = matrix[0];
  
  let extract = matrix.splice(-2,2);

 
noArrMatrix = noArrMatrix.concat(extract[1].reverse())
noArrMatrix = noArrMatrix.concat(extract[0])
 
  return noArrMatrix
  

}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]



//Pyramid Array
//Write a function pyramidArray(base) that takes in an array of numbers representing the base of a pyramid. 
//The function should return a two-dimensional array representing the completed pyramid. 
//To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right.


function pyramidArray(base) {
    let sum= 0;
    let len = base.length;
    let pyramidArr = [base];

    let i = 0;
    
    while (i < len-1) {
        let subPyramidArr = [];
  
        for (let j = 0; j <  pyramidArr[0].length-1; j++) {
            
            sum = pyramidArr[0][j] + pyramidArr[0][j+1];
            subPyramidArr.push(sum);
              
        }
         pyramidArr.unshift(subPyramidArr);
      
     i++;
    }
return pyramidArr
}


let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]


// Pascal's Triangle
//Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1.
//To generate further levels of the pyramid, every element is the sum of the element above and to the left with the element above and to the right.
//Non-existing elements are treated as 0 when calculating the sum.


function pascalsTriangle(num) {
    
    let base = [[1],[1,1]];
    
    let i  = 1;
    let sum;
 
    while (i < num-1) {
        let tempArray = [1,1];
        for (let j = 0; j < base.length-1; j++) {
            sum = base[i][j] + base[i][j+1];
            tempArray.splice(1,0,sum);
        }
        base.push(tempArray);
        tempArray = [1,1];
        i++
    }
 
    return base;
}




// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here



//console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]


//Pig Latin Recall
//Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".


function pigLatinWord(word) {
  
  let vowels = 'aeiou';
  let firstChar = word[0];
  let pigLatinString = '';
  
  if (vowels.includes(firstChar)) {
      return word + "yay"
  }
      
      for (let i = 1; i < word.length; i++) {
          let char = word[i];
          
          if (vowels.includes(char)) {
              let index = i;
             return  pigLatinString = word.slice(index) + word.slice(index-1,index) + 'ay'
          }
      }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

//Sum Array Recall
//Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; 
    }
    
    return sum;
    
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30


//Vowel Counter Recall
//Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
//Vowels are the letters "a", "e", "i", "o", "u".

function countVowels(word) {
  let vowels = 'aeiou';
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
          counter ++;
      }
  }
  
  return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2



//Uncompress Recall
//Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. 
//The function should return the uncompressed version of the string. See the examples.


let uncompress = function(string) {
    
    let decoded = '';
    
    for(let i = 0; i < string.length; i++) {
        
        let char = string[i+1]
        let str = string[i];
        let number = Number(char);
        decoded += multiplyStr(str,number);
    }
    
    return decoded;
}


function multiplyStr(str, number) {
    let productOfMuliply= '';
    for(let i = 0; i < number; i++) {
        productOfMuliply += str;
        
    } 
    
    return productOfMuliply;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'


/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/
function snakeToCamel(str) {
   let strArr = str.split("_");
  let camelStr = "";
   console.log(strArr)
      strArr.map(el => {
      console.log(el.slice(1))
      camelStr += el[0].toUpperCase() + el.slice(1).toLowerCase();
   })
   return camelStr;
}


/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    if(sentence ===  '') {
        return '';
    }
    let arrSentence = sentence.split(" ");
    let reduced = arrSentence.reduce(function(accum, el){
        if(el.length > accum.length){
            return el;
        }else{
            return accum;
        }
    });
    return reduced;
};

/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    const vowels = 'aeiou';
   let stringVowels = ['q'];
    let arr = string.split("");
 
 arr.map(function(el,idx){
    if(vowels.includes(el)){
        if(!stringVowels.includes(el)){
           stringVowels.push(el);           
        }
    }
});
return stringVowels.length >= 4; 
};
