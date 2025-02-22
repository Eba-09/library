import React from 'react'
import "../Styles/Login.css"
const myButton = (props) => {
  return (
    <div>
        <button className={props.className} onClick={props.onClick} type={props.type}>{props.title}</button>
    </div>
  )
}
export default myButton;