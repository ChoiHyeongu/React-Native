import React, { Component } from 'react';

export default class MyButton extends Component {
    onChange(){
        console.log('changed');
    }

    onBlur() {
        console.log('blured');
    }

    render(){
        return (
            <input onChange={this.onChange} onBlur={this.onBlur}>{this.props.children}</input>
        );
    }
}