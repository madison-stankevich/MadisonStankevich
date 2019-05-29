import React, { Component } from 'react';

import marble from '../Images/marble.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                {/* <img className="marblepic" src={marble}/> */}
                Welcome to the personal website of Madison Stankevich.
                <br/><br/>
                This site documents one woman's journey into tech.
                <br/><br/>
                Don't know where to start?
                <br/>
                Check out the projects, blog, and about sections.
            </div>
         );
    }
}
 
export default Home;