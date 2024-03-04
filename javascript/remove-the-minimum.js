function removeSmallest(numbers) {
  // checks if the array is empty of falsy, and returns and empty array in such cases
  if (!numbers || numbers.length === 0) {
  return [];
  }
  
  // finds the index of the minimum value in the array using 'Math.min(...numbers)' and 'indexOf'
  const minNum = numbers.indexOf(Math.min(...numbers));
  
  // creates a new array by concatednating the subarrays before and afetr the element at the min index. 
  // this effectively removes the element at the minimum index without mutating the original array
  return numbers.slice(0, minNum).concat(numbers.slice(minNum + 1));
}
