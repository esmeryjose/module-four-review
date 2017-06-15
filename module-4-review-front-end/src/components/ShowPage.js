import React from 'react'
import { Link } from 'react-router-dom'
import Picture from './Picture'

export default function ShowPage({picture, remove}){
  if (!picture) {
    return null
  }
  return(
    <div>
      <Picture info={picture} remove={remove}/>
    </div>
  )
}
