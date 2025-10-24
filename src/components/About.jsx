import React from 'react'
import sub from '../assets/sub.png';
import { Title } from './Title';

export const About = () => {
  return (
     <section className="about" id="about">
       <Title title= "About Me"/>
        
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
  )
}
