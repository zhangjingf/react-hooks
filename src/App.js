import React, { Component, useState, useEffect, useRef } from 'react';
import './App.css';
import CustomTextInput from './Input';

function Example () {
  const [count, setCount] = useState(0);
  //const prevCountRef = useRef();
  useEffect(() => {
    //prevCountRef.current = count
    document.title = `You clicked ${count} times`;
  })
  //const prevCount = prevCountRef.current;
  const prevCount = usePrevious(count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Now: {count}， Before : {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    this.myRef = React.createRef()
  }
  componentDidMount () {
    document.getElementById("nohook").innerHTML = this.state.num
  }
  componentDidUpdate () {
    //console.log(this.myRef.current)
    document.getElementById("nohook").innerHTML = this.state.num
  }
  render() {
    return (
      <div className="App" ref={this.myRef}>
        <CustomTextInput/>
        <div>hook</div>
        <Example/>
        <div>nohook</div>
        <div id="nohook"></div>
        <button onClick={() => this.setState({num: this.state.num + 1})}>click me</button>
      </div>
    );
  }
}

export default App;
