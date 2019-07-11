import React,{ Component } from 'react';
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import MainSection from "./MainSection"
import SkillSection from "./SkillSection"
import './App.css';

import curtis from "../src/images/background.jpg"



class App extends Component {
  render(){
  return (
    <div className="app">
      <SideBar/>
      <div className="mainSection">
        <TopBar/>
        <MainSection/>
        <SkillSection/>
      </div>
    </div>
  )
  }
}

export default App;
