/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
    // Base case: if the array has one or fewer elements, return the array itself
    if (array.length <= 1) {
        return [array];
    }

    // Recursive case: initialize an array to hold the results
    const result = [];

    // Helper function to generate permutations
    const permute = (arr, prefix = []) => {
        // Base case: if there are no elements left to permute, push the result
        if (arr.length === 0) {
            result.push(prefix);
        } else {
            // Recursively pick each element from the array
            const firstElement = arr[0];
            const remainingElements = arr.slice(1);

            // Recursively call permute on the remaining elements
            permute(remainingElements, prefix.concat(firstElement));
            if (remainingElements.length > 0) {
                permute(remainingElements, prefix);
            }
        }
    };

    permute(array); // Start recursion

    return result;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
