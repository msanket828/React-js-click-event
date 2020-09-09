import React from 'react'
import './SquareBox.css'



function SquareBox(props) {
  //creating dynamic classes
  let styles=['squareBox'];
  styles.push(props.name)

  return (
    <div 
      className={styles.join(' ')}      
      onDoubleClick={props.clicked}>    
      <div className="overlay"></div>
      <span>{props.name}</span>  
    </div>
  )
}

export default SquareBox
