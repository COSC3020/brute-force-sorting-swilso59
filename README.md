[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12803356&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Complexity 
-   The complexity seems to be O(n!) for an input size of n. Since this algrorythm generate all permutations of the array given and checks if they are sorted.
  The amount of permutations checked is n!.

## Best Case Input
- The best case input is an already sorted array. This will make it so that the first permutation checked is the sorted on. However the complexity is still O(n!).
Because the function still checks all permutations of the array.

## Worst Case Input 
- The worst case input would be a reverse ordered input. The algorithm would still check all permutations. The worst case time complexity is still O(n!).

## Random Permutations Without Memory
- In the modified algorithm, the worst case complexity would be the same since the algorithm would still need to check every permutation.
The best case complexity seems to be O(1) constant time. I think this becasue the chance of generating a correctly sorted permutation on the first attempt.
