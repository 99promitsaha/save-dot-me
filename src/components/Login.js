import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
