function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }
  
  const sortedArray = array.slice().sort((a, b) => a - b);
  
  return sortedArray.slice(1, -1).reduce((sum, num) => sum + num, 0);
}



function sumArray(array) {
  // check if the array is empty or has only one element
  if(!array || array.length <= 1) {
    return 0
  }
  
  // sort the array in ascending order
  array.sort(function(a, b) {
    return a - b;
  });
  
  // slice the array to exclude the first and last elements, then su the remaining elements
  return array.slice(1, -1).reduce(function(sum, num) {
    return sum + num;
  }, 0);
}
