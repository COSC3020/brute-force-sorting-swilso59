 // Example usage
  const inputArray1 = [3, 2, 1, 4];
  const result1 = permutationSort(inputArray1);
  
  if (result1.sortedArray !== null) {
    console.log(`Input array: ${inputArray1}`);
    console.log(`Sorted array: ${result1.sortedArray}`);
    console.log(`Permutations checked: ${result1.count}`);
  } else {
    console.log('No sorted permutation found.');
  }
  
  // Example usage for an empty array
  const inputArray2 = [];
  const result2 = permutationSort(inputArray2);
  
  if (result2.sortedArray !== null) {
    console.log(`Input array: ${inputArray2}`);
    console.log(`Sorted array: ${result2.sortedArray}`);
    console.log(`Permutations checked: ${result2.count}`);
  } else {
    console.log('No sorted permutation found.');
  }
  
  // Example usage for an array of [1, 0]
  const inputArray3 = [1, 0];
  const result3 = permutationSort(inputArray3);
  
  if (result3.sortedArray !== null) {
    console.log(`Input array: ${inputArray3}`);
    console.log(`Sorted array: ${result3.sortedArray}`);
    console.log(`Permutations checked: ${result3.count}`);
  } else {
    console.log('No sorted permutation found.');
  }
  
  // Example usage for an array with duplicates like [0, 0]
  const inputArray4 = [0, 0];
  const result4 = permutationSort(inputArray4);
  
  if (result4.sortedArray !== null) {
    console.log(`Input array: ${inputArray4}`);
    console.log(`Sorted array: ${result4.sortedArray}`);
    console.log(`Permutations checked: ${result4.count}`);
  } else {
    console.log('No sorted permutation found.');
  }
  
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var count = permutationSort(a1);
        return count >= 0 && JSON.stringify(a1) == JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });
jsc.assert(test);
