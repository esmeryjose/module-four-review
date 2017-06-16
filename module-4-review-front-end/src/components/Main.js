import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import {TheHeader,NavBar} from './Nav'
import PictureContainer from './PictureContainer'
import { BrowserRouter as Router } from 'react-router-dom'

import '../css/App.css';

class Main extends Component {

  constructor(){
    super()
    this.state={
      theSearch:""
    }

    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(searchTerm){
    // this.history.push("/pictures")
    this.setState({
      theSearch: searchTerm
    })
  }

  displayPictureContainer(){
    return <PictureContainer searchTerm={this.state.theSearch}/>
  }

  doSomething(){
    this.props.history.push("/pictures/new")
  }

  render() {
    return (
      <Router>
        <div className="App">
          <input type="button" value="click Me!!!" onClick={this.doSomething.bind(this)}/>
          <TheHeader/>
          <NavBar/>
          <Switch>
            <Route path="/pictures" component={PictureContainer}/>
            <Redirect from="/" exact to="/pictures" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
