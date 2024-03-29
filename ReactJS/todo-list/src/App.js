import React from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate.js'
import Form from './components/Form.js'
import TodoItemList from './components/TodoItemList.js'
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends React.Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: false },
      { id: 2, text: ' 리액트 소개', checked: false },
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color: color
    })
    
    console.log(color)
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleSelectColor,
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}

      palette={(
        <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
      )}>
        
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;
