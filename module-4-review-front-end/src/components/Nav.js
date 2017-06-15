import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import history from 'history'
import { Input, Menu, Segment, Header } from 'semantic-ui-react'

class NavBar extends Component{

  constructor(){
    super()
    this.state = {
      activeItem: 'home',
      input:""
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleChange(e){
    const input = e.target.value
    if (!this.state.input) {
      history.push('/pictures')
    }
    this.setState({
      input:input
    },()=>{
      this.updateSearch(input)
    })
  }

  render() {
    const { activeItem } = this.state
    console.log(this.state)
    return (
      <div>
        <Menu pointing>
          <Link to={"/pictures"}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Link to={"/pictures/new"}>
            <Menu.Item name='Add Picture' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' value={this.state.input} placeholder='Search...' onChange={this.handleChange.bind(this)} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const TheHeader = () => (
  <Header className="noMargin" as='h3' textAlign='center' block>
    THE SUPER-DUPER FAKE INSTAGRAM APP
  </Header>
)

export { TheHeader, NavBar };
