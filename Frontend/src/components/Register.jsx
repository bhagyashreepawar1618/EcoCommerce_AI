import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/register`,
        {
          username,
          password,
        },
      );

      setMessage("User registered successfully ✅");
      setUsername("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setMessage("Registration failed ❌");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Register
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-200 disabled:bg-gray-400"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {message && (
            <p className="text-center text-sm text-gray-600 mt-2">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
