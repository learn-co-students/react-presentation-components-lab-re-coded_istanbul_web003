// Code SimpleComponent Here
import React, {Component} from "react"

export default class SimpleComponent extends Component {
    constructor(){
        super()
        this.state= {
            mood:"happy"
        }
    }

    handleClick(e){
        if (this.state.mood === "happy"){
            this.setState({mood:"sad"})
        }
        else{
            this.setState({mood: "happy"})
        }
    }

    render() {
        return(
            <div onClick={e => this.handleClick(e)}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}