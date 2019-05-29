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
                    <a href="https://dev.to/madisonstankevich" className ="pink_link" target="_blank">Dev.to</a>.  
                </div>
                <br/>
                <div>
                    For my day-to-day microblogging journey, follow me on {" "}
                    <a href="https://twitter.com/SheCodesInPink" className ="pink_link" target="_blank">Twitter</a>. 
                </div>
                <br/>
                <div className="project_container">
                    May 29, 2019 
                    <br/><br/>
                    Hello World! 
                    <br/><br/>
                    Today is the day I officially deployed this site. 
                    I am very proud of what I was able to create in such a short amount of time.
                    <br/><br/>
                    I completed this website in about three several hour sessions, including the conceptualization and design process.
                    It is a JavaScript/React.js site made without a styling framework.
                    This site is hosted live from Heroku, which is pulling content from my GitHub.
                    <br/><br/>
                    I intend to use this blog to document my job search and my ongoing projects.
                    <br/><br/>
                    Cheers,
                    <br/>
                    Madison
                </div>
            </div>
         );
    }
}
 
export default Blog;