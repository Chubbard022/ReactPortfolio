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
                <div className="side">
                    <h3>Articles</h3>
                        <img className="articlePhoto" src={article1} alt="missing puzzle piece"/>
                            <br/>
                                <div className="articleLink">
                                    <a  href="https://medium.com/@chubbard02/struggles-with-imposter-syndrome-2512beb72cd2" style={{color:"#919191",textDecoration:"none"}} >Imposter Syndrome<i style={{paddingLeft:"5px"}}class="far fa-newspaper"></i></a>
                                </div>
                            <br/>
                        <br/>
                    <br/>
                        <br/>
                            <img className="articlePhoto" src={article2} alt="lightbulb inside cloud"/>
                                <a  href="https://medium.com/@chubbard02/university-vs-bootcamp-learning-ac0f27d45ed" style={{color:"#919191",textDecoration:"none"}}>University Vs. Bootcamp<i style={{paddingLeft:"5px"}} class="far fa-newspaper"></i></a>
                                <br/>
                            <br/>
                        <br/>
                    <br/>
                    <h3>Get In Touch</h3>
                    <p className="sideParagraph">
                        if you would like to get in touch with me. 
                        please leave me an email or contact me through 
                        my social media
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className="email" >
                    <i class="fas fa-envelope bigger"></i>
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