import React,{ Component } from 'react';
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import MainSection from "./MainSection"
import SkillSection from "./SkillSection"
import './App.css';



class App extends Component {
  render(){
  return (
    <div className="app">
     <TopBar/>
     <SideBar/>
     <MainSection/>
     <SkillSection/>
    </div>
  )
  }
}

export default App;
