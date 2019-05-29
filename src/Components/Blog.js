import React, { Component } from 'react';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                <div className="body_title">
                    BLOG
                </div>
                <div>
                    My technical blog posts can be found on{" "}
                    <a href="https://dev.to/madisonstankevich" className ="" target="_blank">Dev.to</a>.  
                </div>
                <br/>
                <div>
                    To follow my day to day journey, follow me on {" "}
                    <a href="https://twitter.com/SheCodesInPink" className ="" target="_blank">Twitter</a>. 
                </div>
            </div>
         );
    }
}
 
export default Blog;