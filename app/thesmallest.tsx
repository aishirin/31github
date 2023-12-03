// pages/index.tsx

import React from 'react';

const MinFunctionPage: React.FC = () => {
  const min = (arr: number[], toReturn: string): number | number[] | undefined => {
    if (toReturn === "value") {
      return Math.min(...arr);
    } else if (toReturn === "index") {
      return arr.indexOf(Math.min(...arr));
    } else {
      // Handle other cases or return undefined
      return undefined;
    }
  };

  const exampleArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

  return (
    <div>
      <h1>Min Function Example</h1>
      <p>Min value: {min(exampleArray, "value")}</p>
      <p>Index of min value: {min(exampleArray, "index")}</p>
    </div>
  );
};

export default MinFunctionPage;
