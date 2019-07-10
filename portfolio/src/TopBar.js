import React,{ Component } from 'react';
import './App.css';



class TopBar extends Component{
    state={

    }
    render(){
        return(
            <div className="topbar">
                <h1>TopBar</h1>
                <img src="../images/background" alt="photo" />
                <h1>Curtis Hubbard</h1>
                <h4>Full Stack Web Developer From Oregon</h4>
                <p>
                    My name is Curtis Hubbard, I am a 22 year old full stack 
                    developer from Eugene Oregon. I have been programming for four years.
                    I started to program while attending College at Lane Community college and Oregon 
                    State University for three years. After attending college for three years, I attended 
                    Lambda School's code bootcamp for nine months.
                </p>
                <button class ="button">Link To Resume</button>
            </div>
        )
    }
}

export default TopBar;