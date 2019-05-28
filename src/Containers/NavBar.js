import React, { Component } from 'react';

import { Link} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                NAVBAR.
                <br/>
                <Link className="" to="/home">Home</Link>
                <br/>
                <Link className="" to="/projects">Projects</Link>
                <br/>
                <Link className="" to="/blog">Blog</Link>
                <br/>
                <Link className="" to="/about">About</Link>
                <br/>
                <Link className="" to="/contact">Contact</Link>
            </div>
         );
    }
}
 
export default NavBar;