import React, { Component } from 'react';

import { Link} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuDisplay: false
         }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {menuDisplay: !prevState.menuDisplay};
        })
    }

    render() { 
        return ( 
            <div>
                NAVBAR.
                {this.state.menuDisplay == false ?
                    <div>
                        <button onClick={this.handleClick}>Menu</button>
                    </div>
                    :
                    <div>
                        <button onClick={this.handleClick}>Menu</button>
                        <br/>
                        <Link className="" onClick={this.handleClick} to="/home">Home</Link>
                        <br/>
                        <Link className="" onClick={this.handleClick} to="/projects">Projects</Link>
                        <br/>
                        <Link className="" onClick={this.handleClick} to="/blog">Blog</Link>
                        <br/>
                        <Link className="" onClick={this.handleClick} to="/about">About</Link>
                        <br/>
                        <Link className="" onClick={this.handleClick} to="/contact">Contact</Link>
                    </div>
                }
            </div>
         );
    }
}
 
export default NavBar;