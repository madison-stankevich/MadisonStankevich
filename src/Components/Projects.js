import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body">
                <div className="body_title">
                    PROJECTS
                </div> 
                <div className="project_container">
                    "VERIFY"
                    <br/><br/>
                    Verify is an application for those who are proactive about their sexual health; it is an STD result sharing application.
                    I used a Ruby on Rails backend and a React.js frontend. 
                    <br/><br/>
                    This project was my first encounter with encryption. 
                    I envision future additions to this app including encryption of all personally identifying data on the backend in order to fully protect user's privacy. 
                    <br/><br/>
                    For the frontend, I used vanilla JavaScript styling. 
                    This was my first extensive encounter with Flexbox and Grid.
                    <br/><br/>
                    Watch the demo below or open with YouTube{" "}
                    <a href="https://www.youtube.com/watch?v=3XVw0uuRL9E" className="pink_link" target="_blank">here</a>.  
                    <br/><br/>
                    <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/3XVw0uuRL9E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="project_container">
                    "WEEKEND WEATHER WATCHER"
                    <br/><br/>
                    Weekend Weather Watcher is an application that keeps track of the upcoming weekend's weather in your favorite locations.
                    This application is meant as a tool to help you make last minute travel plans according to the weather. 
                    <br/><br/>
                    My partner and I used a Ruby on Rails backend to access the Dark Skies weather API and to house all of our user's data.
                    The front end was built using vanilla JS styling and React.js components.
                    <br/><br/>    
                    This application is deployed live on Heroku. 
                    Please forgive the slow load times.
                    <br/><br/>               
                    Link to website{" "}
                    <a href="https://www.youtube.com/watch?v=hiRDU-swJhw" className="pink_link" target="_blank">here</a>. 
                </div>
                <div className="project_container">
                    "CAT FEEDER"
                    <br/><br/>
                    The most quirky project I have been a part of is a cute little one-page website called "Cat Feeder".
                    This application is a website with what appears to be multiple cat profiles with attributes like a bio and favorite food.
                    The user can "feed" a cat (although only once) and change the cat's favorite food.
                    After clicking the inconspicuous red button in the top right, the true website is revealed. 
                    "Cat Feeder" turns into "The Hit List", the easiest way for a mob boss to track his or her marks.
                    <br/><br/>
                    My partner and I used a Ruby on Rails backend to house the user's data. 
                    We were able to randomly generate a new "cat" profile associated with each entry from the Hit List page.
                    All of the interactivity seen on this page was accomplished using vanilla JavaScript.
                    The styling is a combination of Bootstrap and custom CSS. 
                    <br/><br/>
                    [Demo video is in the works]
                </div>
                <div className="project_container">
                    "EVENT FINDR"
                    <br/><br/>
                    My first application was a simple CLI ("command line interface") program that you can run on your computer's terminal.
                    My partner, Lucy, and I used TicketMaster's event API in order to provide event information to the user according to their specified requirements.
                    <br/><br/>
                    It is amazing to look back and see how far I have come in such a short time.
                    <br/><br/>
                    Watch the demo below or open with YouTube{" "}
                    <a href="https://www.youtube.com/watch?v=hiRDU-swJhw" className="pink_link" target="_blank">here</a>.  
                    <br/><br/>
                    <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/hiRDU-swJhw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="nav_bar_menu">
                    More projects coming soon...
                </div>
            </div>
         );
    }
}
 
export default Projects;