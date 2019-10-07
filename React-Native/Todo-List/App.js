import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoListTemplate from './component/TodoListTemplate.js'
import Form from './component/Form.js';
import TodoItemList from './component/TodoItemList.js';

export default class App extends React.Component {

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개'},
      { id: 1, text: ' 리액트 소개'},
      { id: 2, text: ' 리액트 소개'},
    ],
    color: '#343a40'
  }

  render() {
    const {todos} = this.state;
    return (
      <View style={styles.container}>
        <TodoListTemplate
          form={
            <Form />
          }
        >
          <TodoItemList todos={todos} />
        </TodoListTemplate>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
})