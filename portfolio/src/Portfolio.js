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
                <Router></Router>
                {/* <a target="_blank"><iframe src="https://resume.creddle.io/embed/lja36xtgq4"width="850" height="1100" seamless target="_blank"></iframe></a> */}
            </div>
        )
    }
}

export default Portfolio;