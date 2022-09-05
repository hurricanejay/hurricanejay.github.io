import React from 'react'

export const Projects = () => {
  return (
    <div className=" container">
        <p className="wavy-underline section-title">Projects</p>
        <div className="project-container">
          <div className='project-item good-space'>
    
            <div className='project-info'>
              <div className="desktop-only">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/W91r_k2rT0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div className="cta-wrapper">
                <p className="project-title">The Good Space</p> 
                <div className="desktop-only">
                  <a href="https://github.com/hurricanejay/good-space-frontend"  target="_blank" rel="noreferrer"><button className="pill-button text-sm">The Good Space GitHub</button></a>
                </div>
              </div>

              <p> This website was inspired by the COVID-19 pandemic and the simplicity of Craigslist. The name of the project is a riff off of "The Good Place" show. I wanted to create a space for community members to connect with each other by reaching out or receive help. </p>
              <p>The project was built with <b>Ruby on Rails</b> backend, <b>React</b> frontend, <b>React Google API</b> for the map, <b>PostGreSQL</b> for database and <b>Boostrap</b> for styling.</p>
   
              <div className="cta-wrapper-mobile">
                <div>
                  <a href="https://github.com/hurricanejay/good-space-frontend"  target="_blank" rel="noreferrer"><button className="pill-button text-sm">The Good Space GitHub</button></a>
                </div>
                <div>
                  <a href="https://www.youtube.com/watch?v=W91r_k2rT0E" target="_blank" rel="noreferrer"><button className="pill-button  text-sm video-btn">Video Demo</button></a>
                </div>
              </div>
       
     
            </div>
  
          </div>

          <div className="project-item plantify">
            <div className="desktop-only">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ntkYMjSWPzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="cta-wrapper">
              <p className="project-title">Plantify</p>
              <div className="desktop-only">
                <a href="https://github.com/Extraordinarii/Plantify" target="_blank" rel="noreferrer"><button className="pill-button  text-sm">Plantify GitHub</button></a>
              </div>
            </div>
            <div className='project-info'>
              <p>Plantify is a website for plant lovers (or killers) that help users to keep track of their plant care needs and sets watering reminders.</p>
              <p>This project was built with <b>Ruby on Rails</b> on both backend and frontend, <b>PostGreSQL</b> for the database</p>
              <div className="cta-wrapper-mobile">
                <div className="">
                  <a href="https://github.com/Extraordinarii/Plantify" target="_blank" rel="noreferrer"><button className="pill-button  text-sm">Plantify GitHub</button></a>
                </div>
                <a href="https://www.youtube.com/watch?v=ntkYMjSWPzM" target="_blank" rel="noreferrer"><button className="pill-button text-sm video-btn">Video Demo</button></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
