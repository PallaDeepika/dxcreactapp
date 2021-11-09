import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){

    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>click me class</button>
            </div>
        )
    }
}

export default ClassClick
