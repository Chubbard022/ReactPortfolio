import React,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

class Portfolio extends Component{
    render(){
        return(
            <div>
                <Link exact path="/">Home</Link>
                <iframe src="https://resume.creddle.io/embed/lja36xtgq4"width="850" height="1100" seamless></iframe> 
                <h1>RENDERED</h1>
            </div>
        )
    }
}

export default Portfolio;