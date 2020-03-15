import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            <p>Jay is a full stack software engineer with a passion for bringing beautiful design and functionality together.</p>
            <p>Before becoming a software engineer, Jay worked in e-commerce as a website manager and in media as a photographer, photo producer and talent.</p>
            <p>From a young age I was always fussing around with websites - I was blogging (blogger, tumblr, livejournal) or updating my Myspace () and I found myself to constantly tweek the look and feel of the site.</p>
<br />
            <h4>3 Fun Facts:</h4>
            <ul>
                <ol>I am a HUGE plant nerd. At one point I've had about ~100 plants in my backyard garden. </ol>
                <ol>I also like birds and can identify most of them that live in the Northeast region.</ol>
                <ol>I was Lucy Liu's body double for a Bruno Magli shoe campaign. </ol>
            </ul>
            <br />
            <h4>Skills</h4>
            <p>HTML, CSS, JavaScript, React, Redux, Ruby, Ruby on Rails, Shopify, Adobe Photoshop, Adobe Lightroom</p>
            <br />
            <h4>Wanna Say Hi!</h4>
            <p>If you'd like to say "hi" or offer me a job SO G00D that I can't refuse, feel free to shoot me an email at <a href="mailto:jaywen89@gmail.com">jaywen89@gmail.com</a> </p>
            
            <h4>Other Links</h4>
            <a href="https://github.com/hurricanejay">GitHub</a>
            <a href="https://www.linkedin.com/in/jay-wen/">LinkedIn</a>
            </Content>
        </div>
    );
}

export default AboutPage;