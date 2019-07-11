import React,{ Component } from 'react';
import './App.css';



class SideBar extends Component{
    state={

    }
    render(){
        return(
            <div className="sidebar">
                <h1>SideBar</h1>
                <div className="articles">
                    <h3>Articles</h3>
                    <img src="" alt=""/>
                    <h5>Imposter Syndrome</h5>
                    <br/>
                    <img src="../images/background.jpeg" alt="photo"/>
                    <h5>Learning from Bootcamp and University</h5>
                </div>
                <div className="getInTouch">
                    <h3>Get In Touch</h3>
                    <p>
                        if you would like to get in touch with me. 
                        please leave me an email or contact me through 
                        my social media
                    </p>
                    <a>
                        curtis.hubbard.programming@gmail.com
                    </a>
                    <br/>
                    <a>
                    Eugene Oregon
                    </a>
                </div>
            </div>
        )
    }
}

export default SideBar;