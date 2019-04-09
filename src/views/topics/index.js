import React, {Component} from "react";
import { Route, Link } from "react-router-dom";

class Topics extends Component{
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    function Topic({ match }) {
      return (
        <div>
          <h3>{match.params.topicId}</h3>
        </div>
      );
    }
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Route path={`${this.props.match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={this.props.match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

export default Topics;
