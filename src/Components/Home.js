import React, { Component } from 'react';

import { Link} from 'react-router-dom';

import desk from '../Images/wooden-desk.jpg'
import tea from '../Images/tea-party.jpg'
import coffee from '../Images/coffee-table.jpg'

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
                <div className="welcome_outer_container">
                    <div className="welcome_container desk_height grow">
                        <Link className="" to="/projects">
                            <img src={desk} className="tea"/>
                            <div className="desk_text">Look at projects</div> 
                        </Link>   
                    </div>
                    <div className="welcome_container grow">
                        <Link className="" to="/about">
                            <img src={tea} className="tea"/>
                            <div className="tea_text">Meet the creator</div> 
                        </Link>   
                    </div>
                    <div className="welcome_container coffee_height grow">
                        <Link className="" to="/contact">
                            <img src={coffee} className="tea"/>
                            <div className="coffee_text"> <br/>Connect.</div> 
                        </Link>
                    </div>
                </div>
                {/* <div className="body_title welcome_title nav_bar_menu">
                    CHEERS
                </div>  */}
            </div>
         );
    }
}
 
export default Home;