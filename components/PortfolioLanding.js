import React, {useState, useEffect} from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const PortfolioLanding = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect on component load
      setIsVisible(true);
    }, []);
  return (
    <div className='portfolio-container'>
    {/* <h6>Portfolio</h6> */}
    <h1 className={`fade-in-text ${isVisible ? "fade-in" : ""}`}>Our portfolio companies are redesigning the workforce through automation.</h1>
    <div className='arrow-container fade-in'>
                <IoIosArrowDropdownCircle className='portfolio-arrow' />
                </div>
  </div>
  )
}

export default PortfolioLanding