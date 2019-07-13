import React,{ Component } from 'react';
import './App.css';

import article1 from "../src/images/imposter.jpeg"
import article2 from "../src/images/think.jpeg"

class SideBar extends Component{
    state={

    }
    render(){
        return(
            <div className="sidebar">
                <h1>SideBar</h1>
                <div className="side">
                    <h3>Articles</h3>
                    <img src="article1" alt="missing puzzle piece"/>
                    <h5>Imposter Syndrome</h5>
                    <a href="https://medium.com/@chubbard02/struggles-with-imposter-syndrome-2512beb72cd2">imposter</a>
                    <br/>
                    <img src="article2" alt="lightbulb inside cloud"/>
                    <h5>Learning from Bootcamp and University</h5>
                    <a href="https://medium.com/@chubbard02/university-vs-bootcamp-learning-ac0f27d45ed">article2</a>
                </div>
                <div className="side">
                    <h3>Get In Touch</h3>
                    <p>
                        if you would like to get in touch with me. 
                        please leave me an email or contact me through 
                        my social media
                    </p>
                    <a className="email" >
                    <i class="fas fa-envelope"></i>
                        chubbard02@gmial.com
                    </a>
                    <br/>
                    <a>
                    <i class="fas fa-home"></i>
                    Eugene Oregon
                    </a>
                </div>
            </div>
        )
    }
}

export default SideBar;