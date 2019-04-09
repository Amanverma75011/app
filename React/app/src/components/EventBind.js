import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            massage: 'Hello'
        }
  //      this.clickHandler=this.clickHandler.bind(this)
    }
  //  clickHandler()
  //  {
  //       this.setState({
  //           message:'good bye'
  //       })
  //      console.log(this)
  //  }
   clickHandler = () => {
       this.setState({
           message: 'TATA!'
       })
   }
  render() {
    return (
        <div>
            <h1>hello</h1>
      <div>{this.state.message}</div>
      
     {/*   <button onClick= { () => this.clickHandler()}>Click mere bhai</button>*/}
           {/*   <button onClick={this.clickHandler.bind(this)}>Click mere bhai</button>*/}

        <button onClick= {this.clickHandler}>Click mere bhai</button>
      </div>
    )      
  }
}

export default EventBind
