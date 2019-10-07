import React from 'react';
import {View} from 'react-native';
import TodoItem from './TodoItem.js';

export default class TodoItemList extends React.Component {
    render() {
        console.log("Item list rendering...");
        const {todos} = this.props;
        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                />
            )
        )

        return(
            <View>
                {todoList}
            </View>
        );
    }
}