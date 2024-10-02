import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Portfolio = () => {

    useEffect(() => {
        const balls = document.querySelectorAll('.ball');
        
        balls.forEach((ball) => {
          // Randomize the animation delay for each ball
          const randomDelay = Math.random() * 5; // Random delay between 0 to 5 seconds
          ball.style.animationDelay = `${randomDelay}s`;
        });
      }, []);
  return (
    <div className='portfolio-grid-container'>
      <h2>Founder led</h2>
        <div className='portfolio-grid'>
          <div>
              <a href="https://venum.vercel.app" target="_blank" rel="noreferrer noopener">
                  <img src='/portfolio/venum.png' alt="Venum project" />
                  <span className='tag'>Founded</span>
              </a>
          </div>
          <div>
            <a href="https://ranki.ai" target="_blank" rel="noreferrer noopener">
            <img src='/ranki.png'></img>
            <span className='tag'>Founded</span>
            </a>
          </div>
          <div>
            <a href="https://julietchat.vercel.app" target="_blank" rel="noreferrer noopener">
            <img src='/portfolio/juliet.png'></img>
            <span className='tag'>Founded</span>
            </a>
          </div>
          <div>
            <a href="https://theresumebuilderai.com" target="_blank" rel="noreferrer noopener">
            <img src='/portfolio/logo.png'></img>
            <span className='tag'>Founded</span>
            </a>
          </div>
        </div>
        <h2>Venture</h2>
        <h3>No Venture portfolio items to show.</h3>
        <div className='portfolio-grid'>
          {/* <div><img src='/portfolio/venum.png'></img><span className='tag'>Growth</span></div>
          <div><img src='/ranki.png'></img><span className='tag'>Growth</span></div>
          <div><img src='/portfolio/juliet.png'></img><span className='tag'>Growth</span></div>
          <div><img src='/portfolio/logo.png'></img><span className='tag'>Growth</span></div> */}
        </div>
        <h2>Growth</h2>
        <h3>No Venture portfolio items to show.</h3>

        {/* <div className='portfolio-grid'>
          <div><img src='/portfolio/venum.png'></img><span className='tag'>Growth</span></div>
          <div><img src='/ranki.png'></img><span className='tag'>Growth</span></div>
          <div><img src='/portfolio/juliet.png'></img><span className='tag'>Growth</span></div>
          <div><img src='/portfolio/logo.png'></img><span className='tag'>Growth</span></div>
        </div> */}
        </div>
  )
}

export default Portfolio