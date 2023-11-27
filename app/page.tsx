

import { useState } from 'react';
import jwt from 'jsonwebtoken';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();



    const userData = {
      username: username,
     
    };

    const secretKey = 'your-secret-key'; // Замените на свой секретный ключ

    const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });



    console.log('Generated Token:', token);


  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <style jsx>{`
        .login-container {
          max-width: 300px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 6px;
        }

        input {
          padding: 8px;
          margin-bottom: 12px;
        }

        button {
          background-color: #0070f3;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Home;
