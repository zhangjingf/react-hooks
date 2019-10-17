import React, { Component, useState, useEffect, useRef } from 'react';
import CustomTextInput from './Input'
import { Button } from 'antd';

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
// function useReducer(reducer, initialState) {
//   const [state, setState] = useState(initialState);

//   function dispatch(action) {
//     const nextState = reducer(state, action);
//     setState(nextState);
//   }

//   return [state, dispatch];
// }
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      val: 0
    }
    this.myRef = React.createRef()
    console.log(this.myRef);
  }
  UNSAFE_componentWillMount() {
    console.log(1321241);
  }
  componentDidMount () {
    document.getElementById("nohook").innerHTML = this.state.num
    //isBatchingUpdates  为true
    // this.setState({val: this.state.val + 1})
    // console.log('1', this.state.val)
    // this.setState({val: this.state.val + 1})
    // console.log('2', this.state.val)
    setTimeout(() => {
      //isBatchingUpdates  为false
      // this.setState({val: this.state.val + 1})
      console.log('3', this.state.val)
      this.setState({val: this.state.val + 1})
      console.log('4', this.state.val)
    }, 2000)
  }
  componentDidUpdate () {
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
        <Button type="primary" onClick={() => this.setState({num: this.state.num + 1})} style={{marginTop: '10px',}}>click me</Button>
      </div>
    );
  }
}

export default App;
