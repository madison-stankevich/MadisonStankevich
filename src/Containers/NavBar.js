import React, { Component } from 'react';

import { Link} from 'react-router-dom';
import menu from '../Images/black-burger-menu.png'


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
            <div className="nav_bar flex_center_column">
                <div className="nav_bar_name">
                    Madison
                </div >
                <div>
                    Always coding. Ususally in pink.
                    <br/> <br/>
                </div>
                {this.state.menuDisplay == false ?
                    <div className="nav_bar_menu flex_center_column">
                        <a className="nav_bar_link nav_bar_bold" onClick={this.handleClick}> Menu</a>
                    </div>
                    :
                    <div className="nav_bar_menu flex_center_column">
                        <a className="nav_bar_link nav_bar_bold" onClick={this.handleClick}>Menu</a>
                        <Link className="nav_bar_link" onClick={this.handleClick} to="/home">Home</Link>
                        <Link className="nav_bar_link" onClick={this.handleClick} to="/projects">Projects</Link>
                        <Link className="nav_bar_link" onClick={this.handleClick} to="/blog">Blog</Link>
                        <Link className="nav_bar_link" onClick={this.handleClick} to="/about">About</Link>
                        <Link className="nav_bar_link" onClick={this.handleClick} to="/contact">Contact</Link>
                    </div>
                }
            </div>
         );
    }
}
 
export default NavBar;