/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
  function flatten(arr) {
    if (arr.length === 0) {
        return [];
    }

    let first = arr[0];

    if (Array.isArray(first)) {
        return flatten(first).concat(flatten(arr.slice(1)));
    } else {
        return [first].concat(flatten(arr.slice(1)));
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
