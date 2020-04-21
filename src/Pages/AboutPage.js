import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Col from 'react-bootstrap/Col';
import Jay from '../assets/images/jayheadshot.jpg';



function AboutPage(props) {
    return (
        <div className='about-me'>
            <Hero title={props.title} />
            <Content>
                <Col md={9}>
                    <div className="about-me">
                        <img src={Jay} alt="jay headshot" className='img' />
                        <br/>
                        <p>I am a full stack software engineer with a passion for beautiful design and functionality.</p>
                        <p>Before becoming a software engineer, I worked in e-commerce as a website manager and in media as a photographer, producer and talent.</p>
                        <p>From a young age I was always fussing around with websites - I was blogging (blogger, tumblr, livejournal) or updating my Myspace. I was constantly tweeking the styling of the site. It wasn't until many years later that I re-discovered my passion for the creating things on the interwebz.</p>
                        <br />
                        <h4>3 Fun Facts:</h4>
                        <ul>
                            <ol>I am a HUGE plant nerd. At one point I've had ~100 plants in my backyard garden. </ol>
                            <ol>I also like birds and can identify most of them that live in the Northeast region.</ol>
                            <ol>I was once Lucy Liu's body double for a Bruno Magli shoe campaign. </ol>
                        </ul>
                        <br />
                        <h4>Tech Skills:</h4>
                        <p>HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, Shopify, Adobe Photoshop, Adobe Lightroom</p>
                        <br />
                        <h4>Contact:</h4>
                        <p>If you'd like to say "Hello" or offer me a job SO G00D that I can't refuse, feel free to shoot me an <a href="mailto:jaywen89@gmail.com">email</a>! </p>
                        <br />
                        <h4>Other Links:</h4>
                        <a href="https://github.com/hurricanejay">GitHub</a><br />
                        <a href="https://www.linkedin.com/in/jay-wen/">LinkedIn</a>
                    </div>
                </Col>
            </Content>
        </div>
    );
}

export default AboutPage;