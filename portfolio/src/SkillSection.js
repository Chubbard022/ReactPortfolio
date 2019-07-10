import React,{ Component } from 'react';
import './App.css';



class SkillSection extends Component{
    state={

    }
    render(){
        return(
            <div className="skills">
            <h1>Skills</h1>
            <div className="skill-list">
                <h3>FrontEnd</h3>
                <p>HTML5</p>
                <p>CSS3</p>    
            </div>
            <div className="skill-list">
                <h3>Backend</h3>
                <p>Express</p>
                <p>Node.js</p>    
            </div>
            <div className="skill-list">
                <h3>software development</h3>
                <p>Python</p>
                <p>Django</p>    
            </div>
            </div>
        )
    }
}

export default SkillSection;