import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class MyForm extends Component {

  constructor(){
    super()
    this.state={
      link:"",
      caption:""
    }
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })

  }

  handleSubmit(e){
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/pictures', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        picture:this.state
      })
    }).then(response =>( response.json() ))
      .then( picture =>{

        this.props.addPicture()
        this.setState({
          link:"",
          caption:""
        },()=>(this.props.history.push("/pictures")))
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
