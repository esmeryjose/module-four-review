import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class MyForm extends Component {

  constructor(){
    super()
    this.state={
      link: "",
      caption: ""
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const params = Object.assign({}, this.state)
    this.props.submit(params)
    this.setState({
      link: "",
      caption: ""
    })
  }

  render(){
    return(
      <Form className="MyForm" onSubmit={this.handleSubmit.bind(this)}>
        <Form.Field>
          <label>Link</label>
          <input name="link" placeholder='image URL' value={this.state.link} onChange={this.handleChange.bind(this)} />
        </Form.Field>
        <Form.Field>
          <label>Caption</label>
          <input name="caption" placeholder='describe the image' value={this.state.caption} onChange={this.handleChange.bind(this)}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default MyForm;