function weekNumbersToWords(numbers) {
    const days = [];
  
    for (const number of numbers) {
      switch (number) {
        case 1:
          days.push('Monday');
          break;
        case 2:
          days.push('Tuesday');
          break;
        case 3:
          days.push('Wednesday');
          break;
        case 4:
          days.push('Thursday');
          break;
        case 5:
          days.push('Friday');
          break;
        case 6:
          days.push('Saturday');
          break;
        case 7:
          days.push('Sunday');
          break;
        default:
          days.push('Invalid day');
      }
    }
  
    return days;
  }
  
  const inputNumbers = [1, 4, 6, 3, 2];
  const outputDays = weekNumbersToWords(inputNumbers);
  console.log(outputDays); 
  