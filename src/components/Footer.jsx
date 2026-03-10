

export const Footer = ({scrollYPosition}) => {
  return (
    <>
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
        <div class="socials">
            <h3>Socials</h3>
            <ul>
                <li><a href="">LinkedIn</a></li>
                <li><a href=""></a>Github</li>
                <li><a href=""></a>Instagram</li>
                <li><a href=""></a>Youtube</li>
            </ul>
        </div>
        </div>
        <div class="bottom">
            &copy; Copy right all reserved 2025 ||
            Made by me with 🌻
        </div>
    </footer>
    {scrollYPosition > 800 && ( 
        <a href="#hero">
        <div class="goUp flex-center">
            <i class="fa-solid fa-chevron-up"></i>
        </div> 
    </a>
    )}
    </>
    )
    }