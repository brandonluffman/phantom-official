import React from 'react';

const AlertBanner = ({ message, onClose }) => {
  if (!message) return null; // Don't render the component if there's no message

  return (
    <div className='alertBanner'>
        <div className='alertBanner-inner'>
      <p>{message}</p>
      {/* <button onClick={onClose} className='btn btn-primary btn-margin register-white'>Register</button> */}
      {/* <button onClick={onClose} className='alertCloseBtn'>&times;</button> */}
      </div>
    </div>
  );
};

export default AlertBanner;