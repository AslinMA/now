import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        console.log('Sending login request with data:', formData); // Log request data
        const response = await axios.post('http://localhost:5001/api/login', formData);
        console.log('Login successful:', response.data);
        alert('Login successful');
        navigate("/LandingPage"); 
        // Redirect or perform any further actions on successful login
      } catch (error) {
        console.error('Error logging in:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.data); // Log server response
          setLoginError(error.response.data.error);
        } else {
          setLoginError('Login failed');
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-28">
      <h2 className="text-5xl text-primary font-bold mb-10 text-center">LOGIN</h2>
      <form onSubmit={handleSubmit} className="p-8 lg:w-1/2 mx-auto">
        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-xl font-bold mb-2 text-tartiary">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-xl font-bold mb-2 text-tartiary">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Login Error */}
        {loginError && <p className="text-red-500 text-sm text-center mb-4">{loginError}</p>}

        {/* Submit Button */}
        <div className="text-center mb-4">
          <button
            type="submit"
            className="bg-green text-white font-bold py-3 px-8 shadow-3xl rounded hover:bg-dark_green transition-all duration-300"
          >
            Login
          </button>
        </div>

        {/* Signup Link */}
        <div className="text-center text-xl text-tartiary">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary font-bold hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
