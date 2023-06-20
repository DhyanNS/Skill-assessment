import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Perform password validation logic here
    if (currentPassword.trim() === '') {
      newErrors.currentPassword = 'Current password is required';
    }

    if (newPassword.trim() === '') {
      newErrors.newPassword = 'New password is required';
    }

    if (confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform password change logic here
      console.log('Password change successful!');
      history.push('/'); // Redirect to the home page or desired destination
    }
  };

  const handleResetForm = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  const handleCancel = () => {
    history.push('/'); // Redirect to the home page or desired destination
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form>
        <label>
          Current Password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          {errors.currentPassword && <span>{errors.currentPassword}</span>}
        </label>
        <br />
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errors.newPassword && <span>{errors.newPassword}</span>}
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>
        <br />
        <button type="reset" onClick={handleResetForm}>
          Reset
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
