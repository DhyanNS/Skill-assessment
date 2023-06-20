import React, { useState } from 'react';
import App from '../App';


const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Basic email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Basic phone number validation regex pattern
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    if (location.trim() === '') {
      newErrors.location = 'Location is required';
    }

    if (address.trim() === '') {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted!');
    }
  };

  return (
    <div>
      <h2>Contact Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && <span>{errors.location}</span>}
        </label>
        <br />
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span>{errors.address}</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
