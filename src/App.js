import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

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

  toggleTask= id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Let's Get'Er Done</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
