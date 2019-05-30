import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodoItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodoItem] });
  };

  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
