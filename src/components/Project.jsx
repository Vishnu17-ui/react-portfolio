import React from 'react'
import { Title } from './Title'
import { Card } from './Card'
import sub from '../assets/sub.png'

export const Project = () => {
    const projects = [
    { 
        image : sub,
        github : "https://github.com",
        url : "",
        title : "My portfolio",
        description : "Techstack: HTML, CSS, Javascript", 
    },
    { 
        image : sub,
        github : "https://github.com",
        url : "",
        title : "My portfolio",
        description : "Techstack: HTML, CSS, Javascript", 
    },
    { 
        image : sub,
        github : "https://github.com",
        url : "",
        title : "My portfolio",
        description : "Techstack: HTML, CSS, Javascript", 
    },
    { 
        image : sub,
        github : "https://github.com",
        url : "",
        title : "My portfolio",
        description : "Techstack: HTML, CSS, Javascript", 
    }
    ]
  return (
    <section className="projects container" id="projects">
        <Title title= "My Projects"/>
    
    <div className="grid project-container"> 
{projects.map((project, i)=> <Card key={i} {...project} />)
}
    </div>
    </section>
  )
}
