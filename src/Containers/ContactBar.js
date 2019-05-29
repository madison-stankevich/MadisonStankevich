import React, { Component } from 'react';

// import { Link} from 'react-router-dom';

import github from '../Images/pink-github.png'
import linkedin from '../Images/pink-linkedin.png'
import twitter from '../Images/pink-twitter-3.png'
import home from '../Images/pink-home.png'

class ContactBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact_bar">
                <div>
                    <a href="https://www.linkedin.com/in/madison-stankevich/" target="_blank"><img src={linkedin} className="contact_bar_image"/></a>
                </div>
                <div>
                    <a href="https://github.com/madison-stankevich" target="_blank"><img src={github}  className="contact_bar_image"/></a>
                </div> 
                <div className="border_twitter">
                    <a href="https://twitter.com/SheCodesInPink" target="_blank"><img src={twitter} className="contact_bar_image"/></a>  
                </div>
                {/* <div>
                    <img src={home} className="contact_bar_image"/>
                </div> */}
            </div>
         );
    }
}
 
export default ContactBar;