import React, {Component} from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Picture extends Component{

  handleDelete(e){
    this.props.remove(this.props.info)
  }

  renderIndexPic(){
    return (
          <Link to={`/pictures/${this.props.info.id}`}>
            <Card className="picture" image={this.props.info.link}
            header={this.props.info.caption} />
          </Link>
          )
  }

  renderShowPic(){
    return (
          <div>
            <Card className="picture" image={this.props.info.link}
            header={this.props.info.caption} description={this.props.info.created_at} />
          <Button animated onClick={this.handleDelete.bind(this)}>
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden>
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
          </div>

          )
  }

  render(){
    return(
      <div>
        {this.props.index ? this.renderIndexPic.call(this) : this.renderShowPic.call(this)}
      </div>
    )
  }
}

export default Picture
