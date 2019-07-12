import React,{ Component } from 'react';

import picture from "./images/portfolio.pdf"

class Portfolio extends Component{
    render(){
        return(
            <div>
                <object width="400" height="400" data={picture}></object>
            </div>
        )
    }
}

export default Portfolio;