import React from 'react';
import { Skeleton, Button } from 'antd';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <div className="article">
        <Skeleton loading={this.state.loading}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
          </div>
        </Skeleton>
        <Button onClick={this.showSkeleton} disabled={this.state.loading}>
          Show Skeleton
        </Button>
      </div>
    );
  }
}

export default Demo;