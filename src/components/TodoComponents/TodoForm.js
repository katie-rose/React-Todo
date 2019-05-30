import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitItem = event => {
    this.props.addTodo(event, this.state.todoInput);
    this.setState({ todoInput: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitItem}>

          <input
            type="text"
            name="todoInput"
            placeholder="Enter your todo"
            onChange={this.handleChanges}
            value={this.state.todoInput}
          />
          <button>Add ToDo</button>
        </form>
        <button>Clear</button>
      </div>
    );
  }
}

export default TodoForm;
