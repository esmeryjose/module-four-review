import React,{Component} from 'react';
import { Route,Switch } from 'react-router-dom'
import FormContainer from './FormContainer'
import PictureList from './PictureList'
import ShowPage from './ShowPage'

class PictureContainer extends Component {

  constructor() {
    super()
    this.state={
      pictures:[]
    }
  }

  renderPictures(){
    // if (this.props.searchTerm) {
    //
    // } else {
    //
    // }
    return <PictureList pictures={this.state.pictures}/>
  }

  deletePicture(params){
    fetch(`http://localhost:3000/api/v1/pictures/${params.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        picture:params
      })
    }).then(response => response.json() )
      .then( picture =>{
        this.setState(pState=> {
          const newState = pState.pictures.filter(pic=> pic.id !== picture.id)
          return {pictures: newState}
        },()=>(this.props.history.push("/pictures")))
      })
  }

  renderShow(routerProps){
    const id = routerProps.match.params.id
    const picture = this.state.pictures.filter(pic=> pic.id === parseInt(id))
    return <ShowPage picture={picture[0]} remove={this.deletePicture.bind(this)}/>
  }

  submitNewPicture(params){
    fetch('http://localhost:3000/api/v1/pictures', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        picture:params
      })
    }).then(response => response.json() )
      .then( picture =>{
        this.setState(pState=> (
          { pictures: [...pState.pictures,picture]}
        ),()=>(this.props.history.push("/pictures") ))
      })
  }

  // renderForm(){
  //   return <MyForm submit={this.submitNewPicture.bind(this)}/>
  // }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/pictures')
      .then( res => res.json() )
      .then( data => {
        this.setState({ pictures: data})
      })
  }

  addPicture(picture){
    this.setState(pState=> (
      { pictures: [...pState.pictures,picture]}
    ))
  }

  renderForm(){
    return <FormContainer addPicture={this.addPicture.bind(this)}/>
  }

  render(){
    return(
      <Switch>
        <Route path='/pictures/new' render={this.renderForm.bind(this)}/>
        <Route path='/pictures/:id' component={this.renderShow.bind(this)}/>
        <Route render={ this.renderPictures.bind(this) } />
      </Switch>
    )
  }
}

export default PictureContainer;
