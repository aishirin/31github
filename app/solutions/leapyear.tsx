// TypeScript version of the function

function isLeapYear(y: number): boolean {
    if (y % 400 === 0) return true;
    if (y % 100 === 0) return false;
    if (y % 4 === 0) return true;
    return false;
  }
  
  // Example usage
  const year: number = 2024;
  const isLeap: boolean = isLeapYear(year);
  console.log(`${year} is a leap year: ${isLeap}`);
  