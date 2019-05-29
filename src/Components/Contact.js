import React, { Component } from 'react';

import github from '../Images/pink-github.png'
import linkedin from '../Images/pink-linkedin.png'
import twitter from '../Images/pink-twitter-3.png'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                <div className="body_title">
                    CONTACT
                </div> 
                You can reach me through any of the following channels:
                <div>
                    <br/><br/>
                <a href="https://www.linkedin.com/in/madison-stankevich/" className ="nav_bar_link contact_icon" target="_blank"><img src={linkedin} className="contact_bar_image contact_page_image"/> LinkedIn</a>
                </div>
                <div>
                    <a href="https://github.com/madison-stankevich" className ="nav_bar_link contact_icon" target="_blank"><img src={github}  className="contact_bar_image contact_page_image"/> GitHub</a>
                </div> 
                <div>
                    <a href="https://twitter.com/SheCodesInPink" className ="nav_bar_link contact_icon" target="_blank"><img src={twitter} className="contact_bar_image contact_page_image"/> Twitter</a>  
                </div>
                <br/><br/>
                madison.stankevich@flatironschool.com
            </div>
         );
    }
}
 
export default Contact;