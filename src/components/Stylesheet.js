import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    
    let className = props.enabled ? 'primary' : ''
    return (
        <div>
            <h1 className = {className}> welcome to style sheets</h1>
        </div>
    )
}

export default Stylesheet