import React from 'react'
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from './Contact';
import PhotoGallery from './PhotoGallery';


function Authentication() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact}/>
                    <Route path="/photo-gallery" component={PhotoGallery} />
                </Switch>
            </Router>
        </div>
    )
}

export default Authentication
