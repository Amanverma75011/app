import React, { Component } from 'react'

class Counter extends Component {
  constructor(props)
  {
    super()

    this.state={                                                                              
      count:0
    }
  }
  increment(){

    // this.setState ({
    //   count :this.state.count+1
    // }
    // )

    this.setState(prevstate=> ({
      
      count : prevstate.count+1

    })
      )



    console.log(this.state.count) 
  }
    

 incrementFive()
{
 this.increment()
 this.increment()
 this.increment()
 this.increment()
 this.increment()
}
/* render()
 {
   return(
     <div>Count - {this.state.count}
     <button onClick={ () => this.incrementFive() }>Increment</button>
     </div>
   )
 }*/
  render() {
    return (
      <div>
      <div> Count -{this.state.count}</div>
      <button onClick={() => this.incrementFive()}>Increment</button>  
       </div>
    )
  }
}

export default Counter
