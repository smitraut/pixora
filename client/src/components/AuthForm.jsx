// components/AuthForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-hot-toast";

const AuthForm = ({ isSignup }) => {
  const navigate = useNavigate(); // ✅ use here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isSignup ? "/auth/signup" : "/auth/login";
      const payload = isSignup
        ? formData
        : { email: formData.email, password: formData.password };

      const res = await api.post(endpoint, payload);

      localStorage.setItem("token", res.data.token);
      toast.success(`${isSignup ? "Signup" : "Login"} successful!`);
      navigate("/"); // ✅ redirect here
    } catch (err) {
      const data = err.response?.data;

      if (Array.isArray(data?.errors)) {
        // validation errors
        toast.error(data.errors.map((e) => e.message).join("\n"));
      } else {
        // single‐message errors or fallback
        toast.error(data?.message || err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isSignup ? "Create Account" : "Welcome Back"}
      </h2>

      {isSignup && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg"
          onChange={handleChange}
          required
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded-lg"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-lg"
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
