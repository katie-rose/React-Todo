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
            placeholder="Enter your task"
            onChange={this.handleChanges}
            value={this.state.todoInput}
          />
          <button>Add Task</button>
        </form>
        <button className="clear-btn" onClick={this.props.lolz}>Clear</button>
      </div>
    );
  }
}

export default TodoForm;
