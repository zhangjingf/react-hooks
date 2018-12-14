import React, { Component, useState, useEffect } from 'react';
import './App.css';

function Example () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Example></Example>
      </div>
    );
  }
}

export default App;
