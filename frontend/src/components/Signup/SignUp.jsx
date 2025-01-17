// SignUp.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import signUpStyles from './SignUp.module.css';

const SignUp = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '', // Change this to 'username'
    email: '',
    password: '',
  });

  // Function to handle login
  const handleLogin = () => {
    
    setIsSignup(true);
  };

  
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Custom validation logic for email
    const isEmailValid = /^\d{8}@mail.jiit.ac.in$/.test(formData.email);
  
    if (isEmailValid) {
      setIsSignup(true);
      
    } else {
      alert("You are not eligible ")
    }
  };

  return (
    <div className={signUpStyles.container}>
      {isSignup ? (
        <p>Welcome! You are signed up.</p>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <form className={signUpStyles.form} onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username" // Change this to 'username'
                placeholder="Naruto"
                value={formData.username} 
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder='abc@gmail.com'
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="*****"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>

            <button className={signUpStyles.signupbtn} type="submit">Sign Up</button>
            {/* <button className={signUpStyles.loginbtn} onClick={handleLogin}>Log In</button> */}
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
