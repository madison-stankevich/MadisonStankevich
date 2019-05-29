import React, { Component } from 'react';

import { Link} from 'react-router-dom';


class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="not_found">
                Not all who wander are lost... but it seems that you might be. 
                <br/><br/>
                Try heading back to the{' '} 
                <Link className="pink_link" to="/home">home page</Link>.
            </div>
         );
    }
}
 
export default NotFound;