/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(arr) {
    
    let firstNum = arr[0];
    let secondNum = arr[1];
    
    if(arr.length == 2) {
        return true
    }
       if(secondNum - firstNum != 1) {
        return false
    }
    
    if(arr.length > 1) {
         arr.splice(0,1)
    }
    
    return   isSorted(arr) 
};





console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 2, 4, 3, 5]));
console.log(isSorted([2, 4, 6, 7, 8]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
