// This function takes an array as input and attempts to sort it by trying all possible permutations.
// It uses a recursive approach to generate all permutations and returns the sorted array when found.
function permutationSort(a) {
    // A helper function to check if the array is sorted in ascending order.
    // It iterates through the array and returns true if each element in the array is less than or equal to the next.
    function isSorted(array) {
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          return false;
        }
      }
      return true;
    }
  
    // A helper function that swaps two elements in an array. It's used during the generation of permutations.
    // Function to swap elements at positions i and j in the array
    function swap(array, i, j) {
      // Stores the value at position i in a temporary variable
      const temp = array[i];
      // Assigns the value at position j to the position i
      array[i] = array[j];
      // Assigns the value stored in the temporary variable to the position j
      array[j] = temp;
    }
  
    // This function generates all permutations of an array using a recursive approach.
    // It swaps elements to create different permutations and returns the sorted array when found.
    function generatePermutations(array, start, end, count) {
      // If we've gone beyond the end of the array, check if it's sorted and return it if so
      if (start > end) {
        if (isSorted(array)) {
          // Return the sorted array along with the count
          return { sortedArray: array.slice(), count };
        }
      } else {
        // Recursively generate permutations by swapping elements
        for (let i = start; i <= end; i++) {
          // Skip duplicates
          if (i !== start && array[i] === array[i - 1]) {
            continue;
          }
  
          swap(array, start, i); // Swap elements at positions start and i
          const result = generatePermutations([...array], start + 1, end, count + 1);
          if (result.sortedArray !== null) {
            // Found a sorted permutation, propagate it up along with the count
            return { sortedArray: result.sortedArray, count: result.count };
          }
          // No need to undo the swap; we're using a copy of the array in each recursion
        }
      }
  
      return { sortedArray: null, count }; // No sorted permutation found in this branch
    }
  
    // Check for empty array or array with a single element
    if (a.length <= 1) {
      return { sortedArray: a.slice(), count: 0 }; // Return a copy of the array as it is already sorted or has no permutations
    }
  
    // Start generating permutations from the beginning of the array
    return generatePermutations(a, 0, a.length - 1, 0);
  }
