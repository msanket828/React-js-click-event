import React, { Component } from 'react'
import './App.css'
import SquareBox from './Components/SquareBox/SquareBox.js'
import BoxComponent from './Components/BoxComponent'
class App extends Component {

  state = {
    currentCC: null
  }

  handleClick = (name) => {
    this.setState({
      currentCC: name
    })
  }
  render() {
    const { currentCC } = this.state;
    let classes = ['app'];
    classes.push(currentCC);
    return (
      <div className={classes.join(' ')} >
        <h2 className='absolute__header'>Change color using click event (doubleClick) in react </h2>
        <section className='btnGroup'>
          {
            BoxComponent.map((box) => (
              <SquareBox key={box.name} name={box.name} clicked={() => this.handleClick(box.name)} />
            ))
          }
        </section>
      </div>
    )
  }
}
export default App