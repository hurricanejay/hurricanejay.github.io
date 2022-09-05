import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {

  return (
    <footer className="section container">
    <div className="contact" >

        <div className="icons">
            <a className="icon" href="mailto:jaywen89@gmail.com">      
            <FontAwesomeIcon icon={faEnvelope} />
            </a>

            <a className="icon"href="https://twitter.com/_jiggabytes">
                <FontAwesomeIcon icon={faTwitter}  />
            </a>

            <a className="icon" href="https://www.linkedin.com/in/jay-wen/">     
            <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a className="icon" href="https://github.com/hurricanejay">     
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </div>

  </footer>
  )
}
