// pages/index.tsx

import React from 'react';

const IntegrationPage: React.FC = () => {
  const integrate = (coefficient: number, exponent: number): string => {
    const x = coefficient / (exponent + 1);
    return `${x}x^${exponent + 1}`;
  };

  return (
    <div>
      <h1>Integration Example</h1>
      <p>{integrate(2, 3)}</p>
    </div>
  );
};

export default IntegrationPage;
