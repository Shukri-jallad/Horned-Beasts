import React, { Component } from 'react'

export class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>Title</h2>
                <img src={this.props.image} alt="Horned-Beast" width="500" height="600"/>
            </div>
        )
    }
}

export default HornedBeasts
