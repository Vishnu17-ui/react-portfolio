import React from 'react'
import { Title } from './Title'

export const Card = ({image, github, url, title, description}) => {
  return (
     <div className="project-card">
        <div className="top">
            <img src="./assets/bishnu.jpeg" alt="" width="100%"/>
              <iframe src="https://vishnu17-ui.github.io/vertical-slider/" width="100%" height="450px" frameborder="0"></iframe>
        </div>
        <div className="bottom container">
            <div className="links">
                <a href={github} target="_blank">
                    <i className="fa-brands fa-github"></i>
                    </a>

                <a href={url} target="_blank">
                    <i className="fa-brands fa-chrome"></i>
                    </a>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
