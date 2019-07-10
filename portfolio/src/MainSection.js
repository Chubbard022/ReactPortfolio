import React,{ Component } from 'react';
import './App.css';



class MainSection extends Component{
    state={

    }
    render(){
        return(
            <div className="mainSection">
                <h1>Projects</h1>
                <div className="projects">
                    <img src="" alt="img"/>
                    <h6>Title</h6>
                    <p>Description</p>
                    <button>View Live</button>
                    <button>View Code</button>
                </div>
                <div className="projects">
                    <img src="" alt="img"/>
                    <h6>Title</h6>
                    <p>Description</p>
                    <button>View Live</button>
                    <button>View Code</button>
                </div>
                <div className="projects">
                    <img src="" alt="img"/>
                    <h6>Title</h6>
                    <p>Description</p>
                    <button>View Live</button>
                    <button>View Code</button>
                </div>
            </div>
        )
    }
}

export default MainSection;