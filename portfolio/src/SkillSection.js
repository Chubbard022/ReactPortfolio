import React,{ Component } from 'react';
import './App.css';



class SkillSection extends Component{
    state={

    }
    render(){
        return(
            <div className="skills">
            <h1 className="title smaller">Skills</h1>
            <div className="skill-list skillOpposite">
                <h3>FrontEnd</h3>
                <i class="fab fa-html5 icons"></i>
                <i class="fab fa-css3-alt icons"></i>
                <i class="fab fa-js-square icons"></i>
                <i class="fab fa-less"></i>
             </div>
            <div className="skill-list">
                <h3>Backend</h3>
                <i class="fab fa-node icons"></i>   
            </div>
            <div className="skill-list skillOpposite">
                <h3>software development</h3>
                <i class="fab fa-python"></i>
            </div>
            </div>
        )
    }
}

export default SkillSection;