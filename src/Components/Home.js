import React, { Component } from 'react';

import { Link} from 'react-router-dom';

import marble from '../Images/marble.jpg'
import tea from '../Images/tea-party.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="">
                {/* <img className="marblepic" src={marble}/> */}
                <div className="body_title welcome_title">
                    <br/>
                    WELCOME
                </div>
                <div className="welcome_container">
               
                <Link className="" to="/about">
                    <img src={tea} className="tea"/>
                    <div className="tea_text">Meet the creator</div> 
                </Link>   
                </div>
                <div className="welcome_container">
                    Look at projects
                </div>
                <div className="welcome_container">
                    Connect
                </div>
                <div className="body_title">
                    CHEERS
                </div> 
            </div>
         );
    }
}
 
export default Home;