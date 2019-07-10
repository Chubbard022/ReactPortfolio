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
                    <h4>Slackr</h4>
                    <p>Slackr is a web application and Slack bot that makes standups meetings asynchronous. In this project I display my full stack developer skills by adding to the frontend and backend</p>                    <ul>
                        <li><a href="https://slackrs-app.netlify.com/" class="button">View Live</a></li>
                        <li><a href="https://github.com/labs-13-slack-manager-survey/frontend" class="button">View Code</a></li>
					</ul>
                </div>
                <div className="projects">
                    <img src="" alt="img"/>
                    <h4>Black-Hole</h4>
                    <p>Black-Hole is a web based application that allows users to sign up and vent their emotions anonymously.In BlackHole I was a frontend developer that used CRUD operations to create this web applications functionality</p>
                    <ul class="actions">
                        <li><a href="https://blackhole-app.netlify.com/" class="button">View Live</a></li>
                        <li><a href="https://github.com/black-hole-lambda-build-week/front-end" class="button">View Code</a></li>
                    </ul>
                </div>
                <div className="projects">
                    <img src="" alt="img"/>
                    <h4>Secret Family Recipe</h4>
                    <p>Family Recipes is a web based application that allows users to register and create a list of recipes and categorize them too. In Family Recipes, I created the backend functionality that connected to the my frontend developers code</p>
                    <ul class="actions">
                        <li><a href="https://secretfamilyrecipes.netlify.com/" class="button">View Live</a></li>
                        <li><a href="https://github.com/family-recipes-buildweek/Curtis-Hubbard-Backend" class="button">View Code</a></li>
                    </ul>				
                </div>
            </div>
        )
    }
}

export default MainSection;