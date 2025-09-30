import './App.css'
import luffy from './assets/luffy.png'
import sub from './assets/sub.png'

function App() {
 
  return (
    <>
    {/* <!-- dark mode doggler -->  */}
    <input type="checkbox" id="darkMode" />

    <div className="warpper">
    <label htmlFor="darkMode"><i className="fa-solid fa-circle-half-stroke"></i></label>

    {/* <!-- navbar --> */}
     <header>
        <div className="header container flex">
            <div className="logo flex">
                <div>Bishnu</div>
                <div className="line">Full Stack Developer</div>
            </div>
            <label htmlFor="hamburgerMenu">
                <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburgerMenu" />
            <div className="menu">
                <ul className="flex navigation">
                    <li><a href="#hero">Home</a> </li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
      </header>

    {/* <!-- hero section --> */}
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

    {/* <!-- skills section --> */}
<div className="skills" id="skills">
    <h2 className="title">
        <span>skills</span>
    </h2>

    <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{color: "orange"}}></i>
            <span>HTML</span>
        </div>

        <div>
            <i className="fa-brands fa-css3-alt" style={{color: "blue"}}></i>
            <span>CSS</span>
        </div>

        <div>
            <i className="fa-brands fa-js" style={{color: "yellow"}}></i>
            <span>Javascript</span>
        </div>

        <div>
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
        </div>

        <div>
            <i className="fa-brands fa-figma" style={{color: "purple"}}></i>
            <span>Figma</span>
        </div>
    </div>
</div>

  {/* <!-- project section --> */}
<section className="projects container" id="projects">
    <h2 className="title">
        <span>My Projects</span>
    </h2>

<div className="grid project-container">    
 <div className="project-card">
    <div className="top">
      <img src="./assets/bishnu.jpeg" alt="" width="100%"/>
        <iframe src="https://vishnu17-ui.github.io/parallex/" width="100%" height="450px" frameborder="0"></iframe>
    </div>
    <div className="bottom container">
        <div className="links">
            <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-chrome"></i></a>
        </div>
        <h3>Personal Portfolio</h3>
        <p>Techstack: HTML, CSS</p>
    </div>
</div>
    
 <div className="project-card">
    <div className="top">
        <img src="./assets/bishnu.jpeg" alt="" width="100%"/>
        <iframe src="https://vishnu17-ui.github.io/react-prank-calculator/" width="100%" height="450px" frameborder="0"></iframe>
    </div>
    <div className="bottom container">
        <div className="links">
            <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-chrome"></i></a>
        </div>
        <h3>Personal Portfolio</h3>
        <p>Techstack: HTML, CSS, Javascript</p>
    </div>
</div>
    
 <div className="project-card">
    <div className="top">
    <img src="./assets/bishnu.jpeg" alt="" width="100%"/>
         
    </div>
    <div className="bottom container">
        <div className="links">
            <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-chrome"></i></a>
        </div>
        <h3>Personal Portfolio</h3>
        <p>Techstack: HTML, CSS</p>
    </div>
</div>
    
 <div className="project-card">
    <div className="top">
        <img src="./assets/bishnu.jpeg" alt="" width="100%"/>
          <iframe src="https://vishnu17-ui.github.io/vertical-slider/" width="100%" height="450px" frameborder="0"></iframe>
    </div>
    <div className="bottom container">
        <div className="links">
            <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-chrome"></i></a>
        </div>
        <h3>Personal Portfolio</h3>
        <p>Techstack: HTML, CSS, Javascript</p>
    </div>
</div>
</div>
</section>

    {/* <!-- about me section --> */}
     <section className="about" id="about">
        <h2 className="title">
            <span>About Me</span>
        </h2>
        <div className="container flex about-content">
            <div className="flex-center myImg">
                <img src={sub} alt="Bishnu's" width="60%" />
            </div>
            <div className="my-bio container">
                <h2>Bishnu Prasad B.K.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas repellendus beatae suscipit doloribus accusantium enim eaque repudiandae obcaecati, error necessitatibus, ipsum ipsam non exercitationem eveniet placeat earum quis nobis?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit rerum, sequi aliquid pariatur consectetur inventore suscipit eum ad, in magnam voluptate ipsa impedit vero voluptatum cum accusamus animi id necessitatibus!
                </p>
                <p>Devdaha, Rupandehi, Nepal</p>
                <div className="tag">Interest</div>
                <div className="flex">
                    <span>Coding</span>
                    <span>Music</span>
                    <span>Football</span>
                    <span>Supa Hero Mov. & Fashion </span>
                </div>
            </div>
        </div>
     </section>

    {/* <!-- contact section --> */}
     <section className="contact" id="contact">
        <h2 className="title">
            <span>Contact</span>
        </h2>

        <div className="flex social">
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
            <a href=""><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-solid fa-mobile-button"></i></a>
        </div>
        <h3>OR</h3>

        <div className="flex-center">
            <a href="" className="email-section flex-center">
                <span>youremail@gmail.com</span>
                <div className="email-icon flex-center">
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
            </a>
        </div>
     </section>
     
    {/* <!-- footer section --> */}
<footer>
    <footer className="flex-center">
        <div className="top flex">
        <div className="links">
            <h3>Links</h3> 
             <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#about">About Me</a></li>
                
             </ul>   
        </div>
        <div className="socials">
            <h3>Socials</h3>
            <ul>
                <li><a href="">LinkedIn</a></li>
                <li><a href=""></a>Github</li>
                <li><a href=""></a>Instagram</li>
                <li><a href=""></a>Youtube</li>
            </ul>
        </div>
        </div>
        <div className="bottom">
            &copy; Copy right all reserved 2025 ||
            Made by me with 🌻
        </div>
    </footer>
</footer>
    </div>
    <a href="#hero">
        <div className="goUp flex-center">
            <i className="fa-solid fa-chevron-up"></i>
        </div> 
    </a>
    </>
  )
}

export default App;
