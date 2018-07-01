import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit";
import List from "./components/List";
import HeaderComponents from "./components/HeaderComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "pooklook", complete: false },
        { id: 2, name: "nuheng", complete: false }
      ],
      message: ""
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }
  onSubmitMessage(e) {
    e.preventDefault();
    let oldTodo = this.state.todos;
    let todoLength = this.state.todos.length;
    let LastId = this.state.todos[todoLength - 1].id;
    let NewMessage = {
      id: LastId + 1,
      name: this.state.message,
      complete: false
    };
    oldTodo.push(NewMessage);
    this.setState({ todo: oldTodo });
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponents />
        <List todos={this.state.todos} />

        <FormSubmit
          onChangeMessage={this.onChangeMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}
export default App;
