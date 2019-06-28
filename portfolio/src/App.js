import React,{ Component } from 'react';
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import MainSection from "./MainSection"
import './App.css';


class App extends Component {
  render(){
  return (
    <div className="app">
     <TopBar/>
     <SideBar/>
     <MainSection/>
    </div>
  )
  }
}

export default App;
