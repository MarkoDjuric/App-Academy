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
};


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
    // your code here...
let sum = 0;

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

// your code here

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
        return x
    
      } 
  }
  return null
  
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
}


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
  
  return pitArr
}


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
                                  
 return word                     
                         
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
}

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
  
  return rotated
}

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
  return sum
}


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
     return word + "yay"
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
      if((counter%num1 === 0) && (counter%num2 === 0)) {
         return counter      
      }else {
       counter++ 
      }
    }
}


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
}


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
       		longArr.push(words[i]) 
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
