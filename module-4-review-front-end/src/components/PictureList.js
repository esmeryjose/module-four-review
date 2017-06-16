import React from 'react'
import Picture from './Picture'

export default function PictureList(props) {
  return(
    <div>
      {renderPictures(props.pictures)}
    </div>
  )
}

function renderPictures(pictures) {
  return pictures.map(pic=> <Picture key={pic.id} info={pic} index={true}/>)
}
