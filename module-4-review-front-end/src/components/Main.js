import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import {TheHeader,NavBar} from './Nav'
import PictureContainer from './PictureContainer'
import '../css/App.css';

class Main extends Component {

  constructor(){
    super()
    this.state = {
      theSearch: ""
    }
  }

  updateSearch = searchTerm => {
    debugger;
    this.setState({
      theSearch: searchTerm
    })
  }

  displayPictureContainer(){
    return <PictureContainer searchTerm={this.state.theSearch}/>
  }

  render() {
    return (
      <Router>
        <div className="App">
          <TheHeader/>
          <NavBar updateSearch={this.updateSearch}/>
          <Switch>
            <Route path="/pictures" render={this.displayPictureContainer.bind(this)}/>
            <Redirect from="/" exact to="/pictures" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
