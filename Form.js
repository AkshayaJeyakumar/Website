import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css'; // Import CSS file for styling

const Form = () => {
  return (
    <div className="container">
      <h2>HACKATHON REGISTRATION</h2>
      <h3>THE EYE, CSEA ASSOCIATION</h3>
      <form className="registration-form" action="submit_registration.php" method="POST" enctype="multipart/form-data">
        <div className='form-group'>
        <label htmlfor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required/>
        </div>
        <div className='form-group'>
        <label htmlfor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div className='form-group'>
        <label htmlfor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
        </div>
        <div className='form-group'>
        <label htmlfor="phone number">Whatsapp Number:</label>
        <input type="text" id="phone number" name="phone number" placeholder="Enter your number" required/>
        </div>
        <div className='form-group'>
        <label htmlfor="teamName">Team Name:</label>
        <input type="text" id="teamName" name="teamName" placeholder="Enter your team name" required/>
        </div>
        <div class="team-members">
            <label for="teamMembers">Team Members:</label>
            <ul id="teamMembers">
                <li><input type="text" name="member1" placeholder="Member 1 Name" required/></li>
                <li><input type="text" name="member2" placeholder="Member 2 Name" required/></li>
                <li><input type="text" name="member3" placeholder="Member 3 Name" required/></li>
            </ul>
        </div>
        
        <input type="submit" value="Submit Registration"/>
      </form>
      <Link to="/" className="login-link">Login</Link>
    </div>
  );
};

export default Form;