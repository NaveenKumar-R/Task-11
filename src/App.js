import React, {Component} from "react";
import Myform from "./Myform";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              GUVI CRUD Dashboard   
            </a>
          </div>
        </div>
        <div className="ui main container">
            <Myform />


          
          </div>
      </div>
    )
  }
}

export default App;