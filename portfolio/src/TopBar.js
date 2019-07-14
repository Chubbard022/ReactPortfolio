import React,{ Component } from 'react';
import './App.css';

import background from "../src/images/background.jpg"

class TopBar extends Component{
    state={

    }
    render(){
        return(
            <div className="topbar">
                <div className = "socialMedia">
                    <header class="header">
                            <a href="https://twitter.com/qewgj"><i class="fab fa-twitter icons"></i></a>
                            <a href="https://www.linkedin.com/in/curtis-hubbard-945764158/"><i class="fab fa-linkedin icons"></i></a>
                            <a href="https://github.com/chubbard022"><i class="fab fa-github icons"></i></a>
                    </header>
                </div>
                <div className="bottom-section">
                    <h1>Curtis Hubbard</h1>
                    <img className="backgroundPhoto" src={background} alt="photo" className="background-img" />
                    <h4>Full Stack Web Developer</h4>
                    <p className="mainParagraph">
                        I am a 22 year old full stack 
                        developer from Eugene Oregon. I have been programming for five years.
                        I started to program while attending College at Lane Community college and Oregon 
                        State University for three years. After attending college for three years, I attended 
                        Lambda School's code bootcamp for nine months.
                    </p>
                    <button class ="button">Link To Resume</button>
                </div>
            </div>
        )
    }
}

export default TopBar;