import React from 'react'
import luffy from '../assets/luffy.png'

export const Hero = () => {
  return (
    <> 
    <section className="hero-section container" id="hero">
        <div className="grid hero">
        <div className="left flex">
            <div>Hi I'm <span>Bishnu Prasad B.K.</span></div>
            <div className="tag">Full Stack Developer</div>
            <p>I love coding and also to share other's what I know</p>
            <div>
                <a href="./assets/resume page - solution/index.html" download>
                    <button>Download CV<i className="fa-solid fa-download"></i></button>
                </a>
            </div>
        </div>
        <div className="right flex">
            <img src={luffy} alt="" />
        </div>
    </div>
    </section>
    
  {/* <!--   banner section --> */} 
    <section className="flex banner container">
        <div className="flex info-content">
            <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
            </div>
            <div>
                <span>IT</span>
                <p>Bootcamer</p>
            </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
            <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
            </div>
            <div>
                <span>5+ Projects</span>
                <p>Completed</p>
            </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
            <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
            </div>
            <div>
                <span>1+ Year</span>
                <p>Experience</p>
            </div>
        </div>
    </section>
    </>
  )
}
