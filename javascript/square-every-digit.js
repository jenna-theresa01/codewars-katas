function squareDigits(num){
  let string = num.toString();
  let result = '';
  
  for (let i=0; i < string.length; i++){
    // convert each digist to a number, sqaure it, and append to the result string
    let digit = parseInt(string[i]);
    let squaredDigit = digit * digit;
    result += squaredDigit;
  }

  // convert the result back to a number and return it
  return parseInt(result)
}
