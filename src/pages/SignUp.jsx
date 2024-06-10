import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LandingPage from "./landingpage";

const SignUp = () => {

  const navigate = useNavigate();
  // State to manage form data and errors
  const [formData, setFormData] = useState({
    fullName: "",
    userId: "",
    phone: "",
    email: "",
    landOwnerName: "",
    landRegistrationNumber: "",
    landRegistrationPDF: null,
    rubberRegistrationNumber: "",
    rubberRegistrationPDF: null,
    landLocation: "",
    landIDFront: null,
    landIDBack: null,
    handOverLetter: null,
    userIDFront: null,
    userIDBack: null,
    userName: "", // Changed from UserName to userName
    password: "", // Add initial value for password field
    re_password: "", // Add initial value for re_password field
  });
  
  const [errors, setErrors] = useState({});
  const [isOwner, setIsOwner] = useState(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle checkbox change for ownership status
  const handleOwnershipChange = (e) => {
    setIsOwner(e.target.value === "owner");
  };

  // Validate form fields
  const validateForm = () => {
    console.log("working butten validation");

    const newErrors = {};
  
    if (!formData.fullName) newErrors.fullName = "Full name is required";

    if (!formData.userId) newErrors.userId = "User ID is required";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
  
    if (!formData.landOwnerName && isOwner)
      newErrors.landOwnerName = "Land owner name is required";
    if (!formData.landRegistrationNumber)
      newErrors.landRegistrationNumber = "Land registration number is required";
    if (!formData.landRegistrationPDF)
      newErrors.landRegistrationPDF = "Land registration copy is required";
    if (!formData.rubberRegistrationNumber)
      newErrors.rubberRegistrationNumber =
        "Rubber registration number is required";
    if (!formData.rubberRegistrationPDF)
      newErrors.rubberRegistrationPDF = "Rubber registration copy is required";
    if (!formData.landLocation)
      newErrors.landLocation = "Location of land is required";
    if (!formData.landIDFront)
      newErrors.landIDFront = "Land ID (Front Side) is required";
    if (!formData.landIDBack)
      newErrors.landIDBack = "Land ID (Back Side) is required";
  
    if (!isOwner && !formData.handOverLetter)
      newErrors.handOverLetter = "Hand over letter is required";
    if (!isOwner && !formData.userIDFront)
      newErrors.userIDFront = "User ID (Front Side) is required";
    if (!isOwner && !formData.userIDBack)
      newErrors.userIDBack = "User ID (Back Side) is required";

    if (formData.password !== formData.re_password) {
      newErrors.re_password='Passwords do not match' ;
    } else {
      // Passwords match, proceed with form submission
      setErrors({});
      // Add your form submission logic here
    }
    
    if (!formData.userName) newErrors.userName = "User name is required";

    if (!formData.password) newErrors.password = "password is required";
    if (!formData.re_password) newErrors.re_password = "password is required";
  
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working butten click");
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const data = new FormData();
      console.log(data);
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
console.log(data);
      try { 
        const response = await axios.post('http://localhost:5001/api/register', data);
        console.log(response.data);
        alert("Success!");
        navigate("/LandingPage"); 
      } catch (error) {
        console.error("Error submitting form:", error);
       
      }
    } else {
      console.log(formErrors);
      setErrors(formErrors);
    }
  };


  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-28">
      <h2 className="text-5xl text-primary font-bold mb-10 text-center">
        SIGN UP
      </h2>
      <form onSubmit={handleSubmit} className="p- lg:w-1/2 mx-auto">
        {/* Owner Details */}
        <h3 className="text-2xl font-bold mb-3 text-primary ">Owner Details</h3>
        <div className="pl-5">
          <div className="mb-6 ">
            <label
              htmlFor="fullName"
              className="block text-1xl font-bold mb-2 text-tartiary"
            >
              Full Name with Initials
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name with Initials"
              className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="userId"
              className="block text-1xl font-bold mb-2 text-tartiary"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="User ID"
              className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
              required
            />
            {errors.userId && (
              <p className="text-red-500 text-sm">{errors.userId}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-1xl font-bold mb-2 text-tartiary"
            >
              Phone Number
            </label>
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
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-1xl font-bold mb-2 text-tartiary"
            >
              Email
            </label>
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
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        {/* Land Details */}
        <h3 className="text-2xl font-bold mb-3 text-primary">Land Details</h3>
        <div className="pl-5">
          <div className="mb-6 ">
            <label className="block text-xl font-bold mb-2 text-tartiary">
              Ownership Status
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="ownershipStatus"
                  value="owner"
                  checked={isOwner}
                  onChange={handleOwnershipChange}
                  className="mr-2"
                />
                I'm the owner/real owner of this land
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="ownershipStatus"
                  value="notOwner"
                  checked={!isOwner}
                  onChange={handleOwnershipChange}
                  className="mr-2"
                />
                I'm still not the owner of this land
              </label>
            </div>
          </div>

          {/* Conditional Fields Based on Ownership Status */}
          {isOwner && (
            <div>
              {/* ----------------------------   Land Owner Name-----------------------*/}
              <div className="mb-6">
                <label
                  htmlFor="landOwnerName"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  Land Owner Name
                </label>
                <input
                  type="text"
                  id="landOwnerName"
                  name="landOwnerName"
                  value={formData.landOwnerName}
                  onChange={handleChange}
                  placeholder="Land Owner Name"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.landOwnerName && (
                  <p className="text-red-500 text-sm">{errors.landOwnerName}</p>
                )}
              </div>
              {/* ----------------------------  location -----------------------*/}
              <div className="mb-6">
                <label
                  htmlFor="landLocation"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  Location of Land
                </label>
                <input
                  type="text"
                  id="landLocation"
                  name="landLocation"
                  value={formData.landLocation}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.landLocation && (
                  <p className="text-red-500 text-sm">{errors.landLocation}</p>
                )}
              </div>

              <div className="flex flex-row gap-7 mb-6">
                {/* ----------------------------   Land Registration number-----------------------*/}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="landRegistrationNumber"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Land Registration Number
                  </label>
                  <input
                    type="text"
                    id="landRegistrationNumber"
                    name="landRegistrationNumber"
                    value={formData.landRegistrationNumber}
                    onChange={handleChange}
                    placeholder="Land Registration Number"
                    className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.landRegistrationNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.landRegistrationNumber}
                    </p>
                  )}
                </div>
                {/* ----------------------------   Land Registration copy-----------------------*/}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="landRegistrationPDF"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Land Registration Copy (PDF)
                  </label>
                  <input
                    type="file"
                    id="landRegistrationPDF"
                    name="landRegistrationPDF"
                    onChange={handleChange}
                    accept="application/pdf"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.landRegistrationPDF && (
                    <p className="text-red-500 text-sm">
                      {errors.landRegistrationPDF}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-7 mb-6">
                {/* ----------------------------  Rubber Registration number -----------------------*/}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="rubberRegistrationNumber"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Rubber Registration Number
                  </label>
                  <input
                    type="text"
                    id="rubberRegistrationNumber"
                    name="rubberRegistrationNumber"
                    value={formData.rubberRegistrationNumber}
                    onChange={handleChange}
                    placeholder="Rubber Registration Number"
                    className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.rubberRegistrationNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.rubberRegistrationNumber}
                    </p>
                  )}
                </div>
                {/* ----------------------------  Rubber Registration Copy (PDF) -----------------------*/}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="rubberRegistrationPDF"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Rubber Registration Copy (PDF)
                  </label>
                  <input
                    type="file"
                    id="rubberRegistrationPDF"
                    name="rubberRegistrationPDF"
                    onChange={handleChange}
                    accept="application/pdf"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.rubberRegistrationPDF && (
                    <p className="text-red-500 text-sm">
                      {errors.rubberRegistrationPDF}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-4 mb-6">
                {/* ----------------------------id fornt -----------------------*/}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="landIDFront"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    User ID (Front Side)
                  </label>
                  <input
                    type="file"
                    id="landIDFront"
                    name="landIDFront"
                    onChange={handleChange}
                    accept="image/png"
                    className="w-full py-2 px-4 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.landIDFront && (
                    <p className="text-red-500 text-sm">{errors.landIDFront}</p>
                  )}
                </div>
                {/* ----------------------------id back -----------------------*/}

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="landIDBack"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    User ID (Back Side)
                  </label>
                  <input
                    type="file"
                    id="landIDBack"
                    name="landIDBack"
                    onChange={handleChange}
                    accept="image/png"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.landIDBack && (
                    <p className="text-red-500 text-sm">{errors.landIDBack}</p>
                  )}
                </div>
                {/* ------------------------user nme and password--------------------------*/}
              </div>
              
              
            </div>
            
          )}

          {/* Additional fields for non-owners */}
          {!isOwner && (
            <div>
              {/* ----------------------------   Land Owner Name-----------------------*/}
              <div className="mb-6">
                <label
                  htmlFor="landOwnerName"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  Land Owner Name
                </label>
                <input
                  type="text"
                  id="landOwnerName"
                  name="landOwnerName"
                  value={formData.landOwnerName}
                  onChange={handleChange}
                  placeholder="Land Owner Name"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.landOwnerName && (
                  <p className="text-red-500 text-sm">{errors.landOwnerName}</p>
                )}
              </div>
              {/* ----------------------------  location -----------------------*/}
              <div className="mb-6">
                <label
                  htmlFor="landLocation"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  Location of Land
                </label>
                <input
                  type="text"
                  id="landLocation"
                  name="landLocation"
                  value={formData.landLocation}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.landLocation && (
                  <p className="text-red-500 text-sm">{errors.landLocation}</p>
                )}
              </div>
              {/* ----------------------------   Land Registration number-----------------------*/}
              <div className="flex flex-row gap-7 mb-6">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="landRegistrationNumber"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Land Registration Number
                  </label>
                  <input
                    type="text"
                    id="landRegistrationNumber"
                    name="landRegistrationNumber"
                    value={formData.landRegistrationNumber}
                    onChange={handleChange}
                    placeholder="Land Registration Number"
                    className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.landRegistrationNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.landRegistrationNumber}
                    </p>
                  )}
                </div>
                {/* ----------------------------   Land Registration Copy (PDF) -----------------------*/}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="landRegistrationPDF"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Land Registration Copy (PDF)
                  </label>
                  <input
                    type="file"
                    id="landRegistrationPDF"
                    name="landRegistrationPDF"
                    onChange={handleChange}
                    accept="application/pdf"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.landRegistrationPDF && (
                    <p className="text-red-500 text-sm">
                      {errors.landRegistrationPDF}
                    </p>
                  )}
                </div>
              </div>
              {/* ----------------------------  Rubber Registration number -----------------------*/}
              <div className="flex flex-row gap-7 mb-6">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="rubberRegistrationNumber"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Rubber Registration Number
                  </label>
                  <input
                    type="text"
                    id="rubberRegistrationNumber"
                    name="rubberRegistrationNumber"
                    value={formData.rubberRegistrationNumber}
                    onChange={handleChange}
                    placeholder="Rubber Registration Number"
                    className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.rubberRegistrationNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.rubberRegistrationNumber}
                    </p>
                  )}
                </div>
                {/* ----------------------------  Rubber Registration Copy (PDF) -----------------------*/}

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="rubberRegistrationPDF"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    Rubber Registration Copy (PDF)
                  </label>
                  <input
                    type="file"
                    id="rubberRegistrationPDF"
                    name="rubberRegistrationPDF"
                    onChange={handleChange}
                    accept="application/pdf"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.rubberRegistrationPDF && (
                    <p className="text-red-500 text-sm">
                      {errors.rubberRegistrationPDF}
                    </p>
                  )}
                </div>
              </div>
              {/* ---------------------------- Hand Over Letter (PDF)-----------------------*/}
              <div className="mb-6">
                <label
                  htmlFor="handOverLetter"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  Hand Over Letter (PDF)
                </label>
                <input
                  type="file"
                  id="handOverLetter"
                  name="handOverLetter"
                  onChange={handleChange}
                  accept="application/pdf"
                  className="w-full py-2 px-4 bg-transparent  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                <small className="text-tartiary">
                  This letter will ensure the hand over of the property to the
                  user
                </small>
                {errors.handOverLetter && (
                  <p className="text-red-500 text-sm">
                    {errors.handOverLetter}
                  </p>
                )}
              </div>

              <div className="flex flex-row gap-4 mb-6">
                {/* ----------------------------  User ID (fint Side)-----------------------*/}

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="userIDFront"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    User ID (Front Side)
                  </label>
                  <input
                    type="file"
                    id="userIDFront"
                    name="userIDFront"
                    onChange={handleChange}
                    accept="image/png"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.userIDFront && (
                    <p className="text-red-500 text-sm">{errors.userIDFront}</p>
                  )}
                </div>
                {/* ----------------------------  User ID (Back Side)-----------------------*/}

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="userIDBack"
                    className="block text-1xl font-bold mb-2 text-tartiary"
                  >
                    User ID (Back Side)
                  </label>
                  <input
                    type="file"
                    id="userIDBack"
                    name="userIDBack"
                    onChange={handleChange}
                    accept="image/png"
                    className="w-full py-2 px-4  text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                    required
                  />
                  {errors.userIDBack && (
                    <p className="text-red-500 text-sm">{errors.userIDBack}</p>
                  )}
                </div>
              </div>
              
            </div>
          )}

<h3 className="text-2xl font-bold mb-3 text-primary">Account Details</h3>
              <div className="mb-6">
                <label
                  htmlFor="userName"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="User Name"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm">{errors.userName}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.landOwnerName && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="re_password"
                  className="block text-1xl font-bold mb-2 text-tartiary"
                >
                   Confirm password
                </label>
                <input
                  type="password"
                  id="re_password"
                  name="re_password"
                  value={formData.re_password}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
                  required
                />
                {errors.re_password && (
                  <p className="text-red-500 text-sm">{errors.re_password}</p>
                )}
              </div>

          {/* Submit Button */}
          <div className=" flex  flex-row  justify-between items-center mt-10">
            <div className="text-xl">
              Already have an account?{" "}
              <a
                href="/Login"
                className="text-primary font-bold hover:underline ml-3"
              >
                Logging
              </a>
            </div>
            <div>
              <button
                type="submit"
                
                className="bg-green text-white font-bold py-3 px-8  rounded hover:bg-dark_grenn transition-all duration-300 shadow-3xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
   function tapp() {
    console.log("clikedd to");
  }
};

export default SignUp;
