import React, {Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    increase(){
        this.state.count = this.state.count +1
        console.log(this.state.count)
    }

    render(){
        return(
            <div>
                Count -{this.state.count}
                <button onclick- {()=> this.increase()}>increment</button>
            </div>
        )
    }
}

export default Counter