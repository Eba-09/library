import React from 'react'
import "../Styles/Login.css"
const myText = (props) => {
  return (
    <div>
       <input onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}></input>
    </div>
  )
}

export default myText