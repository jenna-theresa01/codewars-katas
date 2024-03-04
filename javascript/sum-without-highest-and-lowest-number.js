function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }
  
  const sortedArray = array.slice().sort((a, b) => a - b);
  
  return sortedArray.slice(1, -1).reduce((sum, num) => sum + num, 0);
}
