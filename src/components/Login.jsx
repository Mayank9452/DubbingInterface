// src/components/Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple hardcoded validation
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authToken', '123456');  // Store token
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center p-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
    </form>
  );
};

export default Login;
