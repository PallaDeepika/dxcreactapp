import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return<div>welcome deepu</div>
        }
        else{
            return<div>welcome guest</div>
        }
        /*return (
            <div>
                <div>welcome deepu</div>
                <div>welcome guest</div>
            </div>
        )*/
    }
}

export default UserGreeting
