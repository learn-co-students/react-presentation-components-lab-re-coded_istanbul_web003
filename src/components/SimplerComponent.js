import React from 'react'

export default function SimplerComponent(props) {
    return (
        <div onClick={props.handleClick}>
            <p>I am just happy</p>
        </div>
    )
}
