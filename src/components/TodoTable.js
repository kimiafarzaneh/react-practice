import React from "react";
import v4 from "uuid";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";

export default class TodoTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      undoneOnly: false,
      todoList: [],
    };

    this.toggleDone = this.toggleDone.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleFilter() {
    this.setState((prevState) => ({
      undoneOnly: !prevState.undoneOnly,
    }));
  }

  toggleDone(id) {
    const newToDo = this.state.todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });
    this.setState({ todoList: newToDo });
  }

  addTodo(name, priority) {
    const newTodoList = [...this.state.todoList];
    const newToDo = {
      name,
      priority,
      done: this.state.undoneOnly,
      id: v4(),
    };
    newTodoList.push(newToDo);
    this.setState({ todoList: newTodoList });
  

    newTodoList.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y && a.priority === b.priority) {
        return -1;
      }
      if (x > y && a.priority === b.priority) {
        return 1;
      } if (a.priority === "high") {
        return -1;
      } if (a.priority === "low") {
        return 1;
      }
      return 0;
    });
  }

  render() {
    return (
      <div className="todo-table">
        <AddTodo addTodo={this.addTodo} />
        <FilterTodo
          undoneOnly={this.state.undoneOnly}
          toggleFilter={this.toggleFilter}
        />
        <TodoList
          todoList={this.state.todoList}
          toggleDone={this.toggleDone}
          undoneOnly={this.state.undoneOnly}
        />
      </div>
    );
  }
}

