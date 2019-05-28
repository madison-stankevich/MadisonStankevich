import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../Components/Home';
import About from '../Components/About';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import NavBar from './NavBar';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="app_container">
                APP CONTAINER.
                <Router>
                    <NavBar/>
                    <div className="">
                        <Switch>
                            <Route exact path='/home' component ={Home}/>
                            <Route exact path='/about' component ={About}/>
                            <Route exact path='/contact' component ={Contact}/>
                            <Route exact path='/projects' component={Projects}/>
                            <Route exact path='/blog' component={Blog}/>
                        </Switch>
                    </div>
                </Router>
            </div>
         );
    }
}
 
export default AppContainer;

{/* <Redirect exact from='/' to='/home' component={Home} /> */}

{/* <Route exact path='/contact' render={(props) => <ViewRequests {...props} allRequests={this.state.allRequests} fetchAllPatients={this.fetchAllPatients}/>}/> */}
