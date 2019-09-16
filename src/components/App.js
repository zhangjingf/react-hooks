import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
class App extends React.Component {
  constructor () {
    super()
    console.warn(this)
  }
  componentDidMount () {

  }
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
