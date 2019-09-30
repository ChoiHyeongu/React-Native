import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

export default class TodoItemList extends React.Component{

    render(){   
        const { todos, onToggle, onRemove} = this.props;
        const todoList = todos.map()
        return(
            <View>

            </View>
        );
    }
}