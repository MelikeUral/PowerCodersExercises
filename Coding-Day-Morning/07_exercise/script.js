
function reverseNumber(number) {
    
    const isNegative = number < 0;
  
    
    const positiveNumber = Math.abs(number);
  
    
    const reversedString = positiveNumber.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
  
    
    if (isNegative) {
      return -reversedNumber;
    }
  
    return reversedNumber;
  }
  
  
  