    import React from "react";

  const TodoForm = props => {
      return (
          <form onSubmit={props.addTodo}>
              <input placeholder ="Enter your todo"
              value=""
              />
<button>Add ToDo</button>
<button>Clear</button>
          </form>
 
      )
  }

export default TodoForm;