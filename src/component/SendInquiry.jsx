import React, { useState } from 'react';

const SendInquiry = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted', formData);
      // Proceed with form submission (e.g., send data to an API)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-28">
      <h2 className="text-5xl text-primary font-bold mb-10 text-left">SEND AN INQUIRY</h2>
      <form onSubmit={handleSubmit} className=" p-8 lg:w-1/2 mx-auto">
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="firstName" className="block text-xl font-bold mb-2 text-tartiary">Name</label>
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                required
              />
              <small className="text-tartiary">First Name</small>
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                required
              />
              <small className="text-tartiary">Last Name</small>
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
        </div>

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
          <small className="text-tartiary">Example: email@example.com</small>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-xl font-bold mb-2 text-tartiary">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
            required
          />
          <small className="text-tartiary">Please enter a valid phone number</small>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-xl font-bold mb-2 text-tartiary">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full py-3 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green text-white font-bold py-3 px-8 shadow-3xl rounded   hover:bg-dark_grenn transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendInquiry;
