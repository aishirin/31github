import React from 'react';

interface StartupProps {
  companyName: string;
  technology: string[];
}

const Startup: React.FC<StartupProps> = ({ companyName, technology }) => {
  const greet = (name: string): string => {
    return `Hello, ${name}! Welcome to ${companyName}. We use ${technology.join(', ')} technologies.`;
  };

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{greet('Developer')}</p>
    </div>
  );
};

export default Startup;
