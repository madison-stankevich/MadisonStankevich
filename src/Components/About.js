import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import headshot from '../Images/headshot.jpeg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                <div className="body_title">
                    ABOUT
                </div> 
                <img className="about_headshot" src={headshot}/>
                My name is Madison Stankevich. 
                I am a Web Developer with a background in nursing.
                Before getting into coding, I worked in a Dermatology office and a Medical Spa.
                <br/><br/>
                In January 2019 I committed to coding full time by starting the Software Engineering immersion program at The Flatiron School.
                Fifteen weeks later, I am armed with a valuable new skillset and am incredibly excited to begin my career as a developer.
                <br/><br/>
                Currently working with: Ruby | Rails | JavaScript | React.js | HTML5 | CSS 
                <br/><br/>
                If you are curious about my journey or have questions about my projects, please feel free to reach out to me. 
                My contact information can be found{" "}
                <Link className="" onClick={this.handleClick} to="/contact">here</Link>.
            </div>
         );
    }
}
 
export default About;