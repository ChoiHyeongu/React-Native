import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoListTemplate from './component/TodoListTemplate.js'
import Form from './component/Form.js';
import TodoItemList from './component/TodoItemList.js';
import Palette from './component/Palette.js';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

export default class App extends React.Component {

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false},
      { id: 1, text: ' 리액트 소개', checked: false},
      { id: 2, text: ' 리액트 소개', checked: true},
    ],
    color: '#343a40'
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    });
  }

  render() {
    const {todos, color} = this.state;
    const {
      handleToggle,
    } = this;
    return (
      <View style={styles.container}>
        <TodoListTemplate
          form={
            <Form />
          }

          palette={(
            <Palette 
              colors={colors}
            />
          )}
        >
          <TodoItemList todos={todos} onToggle={handleToggle}/>
        </TodoListTemplate>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
})