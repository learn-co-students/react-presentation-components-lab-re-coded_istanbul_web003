// Code SimplerComponent Here
import React, {Component} from "react"

const FunComponent = prop => {
    return (
        <div onClick={prop.handleClick}>
            I am just happy
        </div>
    )
}

export default FunComponent