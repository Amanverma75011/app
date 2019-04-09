import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props)
    {
        super(props)
    
    this.state={
        isLoggedIn: false
    }
}
  render() {


    return this.state.isLoggedIn && <div>Welcom All</div> || <div> hiiii</div>

      //ternary oprtor
      //  return this.state.isLoggedIn ? ( 
      //      <div>radhe radhe</div>
      //  ): (
      //      <div> jai ho </div>
      //  )

    

    //second type 
  //    let message
  //    
  //    if(this.state.isLoggedIn)
  //    {
  //        message = <div>Welcome Rahul</div>
  //    }
  //    else {
  //        message =<div> hii dear</div>
  //    }
  //  return <div>{message}</div>

//first approch

  //    if(this.state.isLoggedIn)
  //    {
  //  return (
  //     <div>welcome bro</div>)
  //    }
  //    else{
  //        return ( <div>hey</div>)
      }
    
  }
//}

export default UserGreeting
