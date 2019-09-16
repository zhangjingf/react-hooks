import React from 'react'
const AppContext = React.createContext({
  value: 'ceshi',
  changeValue: () => {}
})

class Parent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class ChildOne extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({changeValue}) => (
          <input onChange={changeValue} />
        )}
      </AppContext.Consumer>
    )
  }
}

class ChildTwo extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({value}) => (
          <div>{value}</div>
        )}
      </AppContext.Consumer>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    this.state = {
      value: '',
      changeValue: this.changeValue
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Parent>
          <ChildOne />
        </Parent>
        <Parent>
          <ChildTwo />
        </Parent>
      </AppContext.Provider>
    );
  }
}

export default Content;