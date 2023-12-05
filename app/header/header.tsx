// pages/index.tsx
import { FC, useState } from 'react';


const Home: FC = () => {
  const [input, setInput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
    
    </div>
  );
};

export default Home;
