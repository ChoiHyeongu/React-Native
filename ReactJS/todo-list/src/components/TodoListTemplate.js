import React from 'react';
import './TodoListTemplate.css'
import Palette from './Palette';

const TodoListTemplate = ({form, children}) => {
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <div>
        <section className="palette-wrapper" >
        <Palette />
        </section>
        </div>
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          { children }
        </section>
      </main>
    );
  };
  
export default TodoListTemplate;