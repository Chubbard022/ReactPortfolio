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
                    <a href="https://medium.com/@chubbard02/struggles-with-imposter-syndrome-2512beb72cd2">imposter</a>
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