import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Jay from '../assets/images/jayheadshot.jpg';



function AboutPage(props) {
    return (
        <div className="about-me">
       
                <Hero title={props.title} />
                <Content>
                    <div className="about-me-div">
                            <img src={Jay} alt="jay headshot" className='img' />
                            <p>I am a full stack software engineer with a passion for beautiful design and functionality.</p>
                            <p>From a young age I was always fussing around with websites blogging (Blogger, Tumblr) or updating my Myspace. 
                                It wasn't until many years later that I re-discovered my passion for the creating things on the interwebz. 
                                After a couple of months of self learning, I decided I wanted to formally learn programming so I enrolled in Flatiron School and graduated in April 2020.</p>

                            <br />
                        </div>

                        <div className="about-me-div" >
                            <p>Prior to my career transition, I worked as a website and marketing manager for a start-up jewelry company and in media as a photographer, producer and talent. I'm looking for new opportunities that will allow me to combine my new technical skills and creativity to create something people can easily use.</p>
                            <br/>
                            <h4>Tech Skills:</h4>
                            <p>HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, SQL, PostGres, Adobe Photoshop, Adobe Lightroom, Shopify, MailChimp, Klaviyo</p>
                            {/* <br /> */}
                            <h4>3 Fun Facts:</h4>
                            <ul>
                                <li>I am a HUGE plant nerd. At one point I've had ~100 plants in my backyard garden. </li>
                                <li>I lived on a houseboat for almost a year.</li>
                                <li>I was once Lucy Liu's body double for a Bruno Magli shoe campaign. </li>
                            </ul>
                            {/* <br /> */}
                            <h4>Contact:</h4>
                            <p>If you'd like to say "Hello" or offer me a job SO G00D that I can't refuse, feel free to shoot me an <a href="mailto:jaywen89@gmail.com">email</a>! </p>
                            {/* <br /> */}
                            <h4>Other Links:</h4>
                            <a href="https://github.com/hurricanejay">GitHub</a><br />
                            <a href="https://www.linkedin.com/in/jay-wen/">LinkedIn</a>
                        </div>

                </Content>
            </div>

    );
}

export default AboutPage;