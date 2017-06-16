import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { Input, Menu, Segment, Header } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'


const history = createHistory()

class NavBar extends Component{

  constructor(props){
    super(props)
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
    this.setState({
      input:input
    },()=>{
      // debugger
      this.props.updateSearch(input)
    })
    if (!this.state.input) {
      history.push('/pictures')
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing>
          <NavLink to={"/pictures"}>Pictures
            {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /> */}
          </NavLink>
          <NavLink to={"/pictures/new"}>New Picture
            {/* <Menu.Item name='Add Picture' active={activeItem === 'messages'} onClick={this.handleItemClick} /> */}
          </NavLink>
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
