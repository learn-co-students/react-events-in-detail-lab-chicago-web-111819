import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        // debugger
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render () {
        return (
            <button onClick={this.handleClick}>
                CoordinatesButton
            </button>
        )
    }
}