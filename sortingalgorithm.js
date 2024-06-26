// This function implements the bubble sort algorithm. It takes an array of numbers and sorts them in ascending order.
// The algorithm works by repeatedly swapping the adjacent elements if they are in wrong order.
// It does this by iterating over each element in the array and comparing it with the adjacent elements.
// If the current element is greater than the adjacent element, they are swapped.
// This process is repeated until the array is sorted.
const bubblesortingAlgorithm = (array) => {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Loop through each element in the array again, starting from the next element
    for (let j = 1; j < array.length; j++) {
      // If the current element is greater than the previous element, swap them
      if (array[j] < array[j - 1]) {
        // Store the current element in a temporary variable
        let temp = array[j];

        // Move the previous element to the current position
        array[j] = array[j - 1];

        // Move the temporary variable (the previous element) to the previous position
        array[j - 1] = temp;
      }
    }
  }
  // Return the sorted array
  return array;
};

const numbers = [5, 3, 8, 1, 4];

console.log(bubblesortingAlgorithm(numbers));

//insertion sort

// This function implements the insertion sort algorithm. It takes an array of numbers and sorts them in ascending order.
// The algorithm works by iterating over each element of the array, and then iterating over the previous elements of the array.
// It compares the current element with each of the previous elements and shifts the previous elements to make space for the current element.
// The current element is then inserted at its correct position in the array.
// The function returns the sorted array.
const insertionAlgorithm = (array) => {
  // Iterate over each element of the array
  for (let i = 1; i < array.length; i++) {
    // Store the current element in a variable for easier reference
    let currentnumber = array[i];
    // Store the index of the previous element in a variable for easier reference
    let previousnumberindex = i - 1;

    // Iterate over the previous elements of the array
    while (
      // Continue iterating as long as the previous element exists and is greater than the current element
      previousnumberindex >= 0 &&
      array[previousnumberindex] > currentnumber
    ) {
      // Shift the previous element to make space for the current element
      array[previousnumberindex + 1] = array[previousnumberindex];
      // Decrement the index of the previous element
      previousnumberindex = previousnumberindex - 1;
    }
    // Insert the current element at its correct position in the array
    array[previousnumberindex + 1] = currentnumber;
  }

  // Return the sorted array
  return array;
};

const array = [5, 3, 8, 1, 9];

console.log(insertionAlgorithm(array));

// mergesort

// This function implements the Merge Sort algorithm to sort an array of numbers in ascending order.
// The function takes an array of numbers as input.
// The algorithm works by dividing the array into two halves until each half contains only one element.
// Then, the function merges the two halves into a single sorted array by comparing the elements of each half and merging them back into a single array.
// The function continues this process recursively until the entire array is sorted.
// The function returns the sorted array.
const mergesortalgorithm = (array) => {
  // If the array has only one element or no element, it's already sorted, so return it.
  if (array.length < 2) {
    // Return the array as it is since it's already sorted.
    return array;
  }

  // Find the middle index of the array.
  // The middle index is calculated by dividing the length of the array by 2 and rounding down to the nearest whole number.
  let middleindex = Math.floor(array.length / 2);

  // Divide the array into two subarrays: left and right.
  // The left subarray contains elements from index 0 to middle - 1.
  // The right subarray contains elements from middle to the end of the array.
  let leftsubarray = array.slice(0, middleindex);
  let rightsubarray = array.slice(middleindex);

  // Recursively sort the left and right subarrays using the mergesort algorithm.
  // The sortedLeftSubarray will contain the sorted elements from the left subarray.
  // The sortedRightSubarray will contain the sorted elements from the right subarray.
  let sortedLeftSubarray = mergesortalgorithm(leftsubarray);
  let sortedRightSubarray = mergesortalgorithm(rightsubarray);

  // Merge the sorted subarrays back into a single sorted array.
  // The merge function takes two sorted subarrays as input and returns a new array that is the result of merging the two subarrays.
  // The merge function iterates over each element of the left and right subarrays and compares them.
  // The smaller element is then added to the merged array and the index of the subarray is incremented.
  // The process continues until either the left or right subarray is empty.
  // The remaining elements from the non-empty subarray are then added to the merged array.
  // The merged array is then returned.
  return merge(sortedLeftSubarray, sortedRightSubarray);
};

// Function to merge two sorted subarrays into a single sorted array
// The function takes two parameters: leftsubarray and rightsubarray
// The function returns a new array that is the result of merging the two subarrays
const merge = (leftsubarray, rightsubarray) => {
  // Initialize an empty array to store the merged array
  let sortedarray = [];

  // Loop until either the leftsubarray or the rightsubarray is empty
  while ((leftsubarray.length, rightsubarray.length)) {
    // If the first element of the leftsubarray is less than or equal to the first element of the rightsubarray
    if (leftsubarray[0] <= rightsubarray[0]) {
      // Add the first element of the leftsubarray to the sortedarray and remove it from the leftsubarray
      sortedarray.push(leftsubarray.shift());
    } else {
      // Add the first element of the rightsubarray to the sortedarray and remove it from the rightsubarray
      sortedarray.push(rightsubarray.shift());
    }
  }

  // Add any remaining elements from the leftsubarray and the rightsubarray to the sortedarray
  return [...sortedarray, ...leftsubarray, ...rightsubarray];
};

const mergesortarray = [5, 3, 8, 4, 9];
console.log(mergesortalgorithm(mergesortarray));

//quick sort algorithm

// Recursive function to sort an array using the Quick Sort algorithm
// The function takes an array as a parameter and returns a sorted array
const quicksortalgorithm = (quicksortarray) => {
  // If the array has less than 2 elements, it's already sorted, so return it
  // This base case stops the recursion when the array is small enough
  if (quicksortarray.length < 2) {
    // Return the array as is because it's already sorted
    return quicksortarray;
  }
  
  // Select the last element of the array as the pivot
  // The pivot is the element that determines the partitioning of the array
  let pivot = quicksortarray[quicksortarray.length - 1];
  
  // Create empty arrays to store elements smaller than the pivot and elements greater than the pivot
  // These arrays will be used to sort the elements on either side of the pivot
  let right = [];
  let left = [];

  // Loop through each element in the array, except the last one
  // The last element is the pivot, so it's excluded
  for (let i = 0; i < quicksortarray.length - 1; i++) {
    // If the current element is smaller than the pivot, add it to the left array.
    // Elements smaller than the pivot will be placed in the left subarray
    if (quicksortarray[i] < pivot) {
      // Add the element to the left array
      left.push(quicksortarray[i]);
    } else {
      // If the current element is greater than the pivot, add it to the right array.
      // Elements greater than the pivot will be placed in the right subarray
      right.push(quicksortarray[i]);
    }
  }

  // Recursively sort the left and right subarrays
  // The left subarray is sorted by calling the quicksortalgorithm function recursively
  // The right subarray is sorted in the same way
  // The sorted left and right subarrays are combined with the pivot in the correct order
  // The sorted array is then returned
  return [...quicksortalgorithm(left), pivot, ...quicksortalgorithm(right)];
};

const quicksortnumbers = [4, 7, 1, 5];

console.log(quicksortalgorithm(quicksortnumbers));
