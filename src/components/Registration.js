import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "https://apiv2.savedotme.xyz/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log("Registration successful");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Registration</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
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
          onClick={handleRegistration}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
