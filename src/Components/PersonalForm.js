import React, { useState } from 'react';


const PersonalForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      case 'dateOfBirth':
        setDateOfBirth(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'educationLevel':
        setEducationLevel(value);
        break;
      default:
        break;
    }
  };

  const handleSaveChanges = () => {
    // Perform save changes logic here
    console.log('Saving changes...');
  };

  const handleChangePassword = () => {
    // Redirect to password change page
    console.log('/change-password');
  };

  return (
    <div>
      <h2>Personal Form</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <select name="Department" value={department} onChange={handleChange}>
            <option value="Department">Human Resource</option>
            <option value="Department">M</option>
            <option value="Department">F</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Education Level:
          <input
            type="text"
            name="educationLevel"
            value={educationLevel}
            onChange={handleChange}
          />
        </label>
        <br />
      </form>
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default PersonalForm;
