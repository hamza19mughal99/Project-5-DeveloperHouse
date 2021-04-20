import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';

function RoutesConfig() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Services" component={Services} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default RoutesConfig;