import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form.js'

export default class App extends React.Component {

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: false },
      { id: 2, text: ' 리액트 소개', checked: false },
    ]
  }

  render() {

    const {input} = this.state;

    return (
      <View>
        <TodoListTemplate
          
        />
        <Form />
      </View>
    );
  }
}