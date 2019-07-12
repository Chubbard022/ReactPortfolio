import React,{ Component } from 'react';
import './App.css';

import slackr from "../src/images/slackr-screenShot.png"
import blackHole from "../src/images/blackhole-screenShot.png"
import secretKitchen from "../src/images/familyRecipe-screenShot.png"


class MainSection extends Component{
    state={

    }
    render(){
        return(
            <div className="mainSection">
                <h1 className="title">Projects</h1>
                <br/>
                <div className="projects">
                    <h4>Slackr</h4>
                    <img src={slackr} alt="website landing page" className="slackrPhoto"/>
                    <p>Slackr is a web application and Slack bot that makes standups meetings asynchronous. In this project I display my full stack developer skills by adding to the frontend and backend</p>                   
                       <a href="https://slackrs-app.netlify.com/" className="button">View Live</a>
                       <a href="https://github.com/labs-13-slack-manager-survey/frontend" className="button">View Code</a>
                </div>
                <div className="projects">
                    <h4>Black-Hole</h4>
                    <img src={blackHole} alt="website landing page" className="blackholePhoto"/>
                    <p>Black-Hole is a web based application that allows users to sign up and vent their emotions anonymously.In BlackHole I was a frontend developer that used CRUD operations to create this web applications functionality</p>
                        <a href="https://blackhole-app.netlify.com/" className="button">View Live</a>
                        <a href="https://github.com/black-hole-lambda-build-week/front-end" className="button">View Code</a>
                </div>
                <div className="projects">
                    <h4>Secret Family Recipe</h4>
                    <img src={secretKitchen} alt="website landing page" className="kitchenPhoto"/>
                    <p>Family Recipes is a web based application that allows users to register and create a list of recipes and categorize them too. In Family Recipes, I created the backend functionality that connected to the my frontend developers code</p>
                        <a href="https://secretfamilyrecipes.netlify.com/" className="button">View Live</a>
                        <a href="https://github.com/family-recipes-buildweek/Curtis-Hubbard-Backend" className="button">View Code</a>
                </div>
            </div>
        )
    }
}

export default MainSection;