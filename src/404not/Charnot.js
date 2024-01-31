import React from 'react';
import { Link } from 'react-router-dom';

const Charnot = () => {
  const containerStyle = {
    backgroundImage: 'url("https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/fc04aeda-faad-4f2c-44d1-cd0297291000/public")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure at least 100% viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={'/'} className='no-underline'><h1 className='  bg-gray-50 relative top-6 text-blue-800'>Homepage</h1></Link>
    </div>
  );
};

export default Charnot;
