import React from 'react';

export default class CoordinatesButton extends React.Component {
    clickBoi = (e) => {
        
        let array = [e.clientX, e.clientY]
        console.log(array)
        console.log('hello')
        // let callBack = () => this.props.onReceiveCoordinates(array);
        this.props.onReceiveCoordinates(array)
        // return callBack
    }
    render(){
        
        return (
            <button onClick={this.clickBoi}>Hello</button>
        )
    }
}