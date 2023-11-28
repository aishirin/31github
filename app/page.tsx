

function Home() {
  const result1: string = repeatingFractions(1, 1);
  const result2: string = repeatingFractions(1, 3);
  const result3: string = repeatingFractions(2, 888);

  return (
    <div>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>{result3}</p>
    </div>
  );
}

function repeatingFractions(numerator: number, denominator: number): string {
  let integerPart: number = Math.floor(numerator / denominator);
  let remainder: number = numerator % denominator;

  if (remainder === 0) {
    return integerPart.toString();
  }

  let result: string = integerPart + '.';
  let remainderMap: Map<number, number> = new Map();

  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      let index: number = remainderMap.get(remainder)!;
      let nonRepeating: string = result.substring(0, index);
      let repeating: string = result.substring(index);
      return nonRepeating + '(' + repeating + ')';
    }

    remainderMap.set(remainder, result.length);

    remainder *= 10;
    let digit: number = Math.floor(remainder / denominator);
    result += digit.toString();
    remainder %= denominator;
  }

  return result;
}

export default Home;
