import React from 'react'
import { Marquee } from './Marquee'

export const Profile = () => {
  return (
    <div className="intro">
        <div className="container">

            <p>Hello, my name is Jay.</p>

            <p>I'm a multi-disciplinary frontend engineer with a passion for creating user facing products with intuitive UX and beautiful UI. </p>
            <p>I'm a creative problem solver with a background in media production, photography, and marketing.</p>
              
            <Marquee/>
            <a href="mailto:jaywen89@gmail.com"><button class="pill-button">Contact Me</button></a>
        </div>
  </div>
  )
}
