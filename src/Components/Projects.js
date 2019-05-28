import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                PROJECTS.
                <div>
                    My final solo project from Flatiron is an STD result sharing application.
                    I used a Ruby on Rails backend and a React.js frontend. 
                    <br/><br/>
                    I used encryption for the first time during this project. 
                    I envision future additions to this app including encryption of all personally identifying data on the backend in order to fully protect user's privacy. 
                    <br/><br/>
                    For the frontend, I used vanilla JavaScript styling. 
                    This was my first extensive encounter with Flexbox and Grid.
                    <br/><br/>
                    YOUTUBE
                </div>
                <div>
                    My last partner project at Flatiron was an application that keeps track of the upcoming weekend's weather in your favorite locations.
                    This application is meant as a tool to help you make last minute travel plans according to the weather. 
                    <br/><br/>
                    We used a Ruby on Rails backend to access the Dark Skies weather API and to house all of our user's data.
                    The front end was built using vanilla JS styling and React.js components.
                    <br/><br/>    
                    This application is deployed live on Heroku. 
                    Please forgive the slow load times.
                    <br/><br/>               
                    OUR APP
                </div>
                <div>
                    The most quirky project I was a part of during my time at Flatiron was a cute little one-page website called "Cat Feeder".
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
                    YOUTUBE
                </div>
                <div>
                    My first project from Flatiron was a simple CLI ("command line interface") program that you can run on your computer's terminal.
                    My partner, Lucy, and I used TicketMaster's event API in order to provide event information to the user according to their specified requirements.
                    <br/><br/>
                    It is amazing to look back and see how far I have come in such a short time.
                    <br/><br/>
                    YOUTUBE
                </div>
            </div>
         );
    }
}
 
export default Projects;