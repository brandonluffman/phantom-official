import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const PageLoader = () => {
  return (
    <div className='page-loader-container'>
      <div className='spinner'>
        <ImSpinner9 />
      </div>
    </div>
  )
}

export default PageLoader;