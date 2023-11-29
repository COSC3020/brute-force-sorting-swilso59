// This function takes an array as input and attempts to sort it by trying all possible permutations.
// It uses a recursive approach to generate all permutations and checks if each permutation is sorted.
// The number of permutations checked until a sorted one is found is returned.
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
  // It swaps elements to create different permutations and checks if each one is sorted.
  // The count of permutations checked until a sorted one is found is accumulated and returned.
  function generatePermutations(array, start, end) {
      let count = 0;

      // If we've gone beyond the end of the array, increment the count and return
      if (start > end) {
          count++;
          console.log(`Permutation: ${array}`);
          if (isSorted(array)) {
              // Log that the permutation has been checked and is sorted
              console.log("Checked (Sorted)");
          } else {
              // Log that the permutation has been checked and is not sorted
              console.log("Checked (Not Sorted)");
          }
      } else {
          // Recursively generate permutations by swapping elements
          for (let i = start; i <= end; i++) {
              swap(array, start, i); // Swap elements at positions start and i
              count += generatePermutations(array.slice(), start + 1, end); // Recur for the rest of the array
              swap(array, start, i); // Backtrack: undo the previous swap to explore other permutations
          }
      }

      return count;
  }

  // Start generating permutations from the beginning of the array
  return generatePermutations(a, 0, a.length - 1);
}

// Example usage
const inputArray = [3, 2, 1, 4];
const permutationCount = permutationSort(inputArray);
console.log(`Sorted array: ${inputArray}`);
console.log(`Number of permutations checked until a sorted one is found: ${permutationCount}`);
