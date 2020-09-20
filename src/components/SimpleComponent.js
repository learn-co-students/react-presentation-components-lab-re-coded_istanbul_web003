import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        this.setState({
           mood: this.state.mood !== 'happy'? 'happy' : 'sad'
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}
