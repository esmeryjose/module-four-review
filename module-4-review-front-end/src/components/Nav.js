import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { Input, Menu, Header } from 'semantic-ui-react'

class NavBar extends Component{

  constructor(props){
    super(props)
    this.state = {
      activeItem: 'home',
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleItemClick = (e, name) => {
    e.preventDefault()
    this.setState({ activeItem: name })
  }

  handleChange(e, history) {
    const input = e.target.value

    if (!this.state.input) {
      console.log('state input is invalid')
      history.push('/pictures')
    }

    this.setState({
      input
    }, () => {
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
          <NavLink to="/pictures" className="item" activeClassName="active" isActive={() => activeItem === 'home'} onClick={(e) => this.handleItemClick(e, 'home')} >
            Home
          </NavLink>
          <NavLink to="/pictures/new" className="item" activeClassName="active" isActive={() => activeItem === 'messages'} onClick={(e) => this.handleItemClick(e, 'messages')} >
            Add Picture
          </NavLink>
          <SearchBar input={this.state.input} handleChange={this.handleChange} />
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

const SearchBar = withRouter(({ history, input, handleChange }) => (
  <Menu.Menu position='right'>
    <Menu.Item>
      <Input icon='search' value={input} placeholder='Search...' onChange={(event) => handleChange(event, history)} />
    </Menu.Item>
  </Menu.Menu>
))

export { TheHeader, NavBar };
