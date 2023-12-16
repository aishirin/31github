function gps(s: number, x: number[]): number {
    return Math.max(...x.slice(1).map((a, i) => ((a - x[i]) / s) * 3600)) | 0;
  }
  
  // Example usage
  const secondsPerUnit = 2; // Replace this value with your desired value
  const coordinates = [0, 10, 20, 30]; // Replace this array with your coordinates
  const maxSpeed = gps(secondsPerUnit, coordinates);
  
  console.log(`Maximum speed: ${maxSpeed} km/h`);
  